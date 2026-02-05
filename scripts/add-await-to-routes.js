#!/usr/bin/env node

/**
 * Migration script to add await keywords to all dataStore function calls
 * Run this once to update all API routes for async Redis operations
 */

const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, '..', 'app', 'api');

// Functions that need await
const asyncFunctions = ['readData', 'addItem', 'updateItem', 'deleteItem', 'getItemById'];

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    asyncFunctions.forEach(func => {
        // Pattern: const variable = functionName(
        const pattern1 = new RegExp(`(const\\s+\\w+\\s*=\\s*)${func}\\(`, 'g');
        if (pattern1.test(content)) {
            content = content.replace(pattern1, `$1await ${func}(`);
            modified = true;
        }

        // Pattern: return functionName(
        const pattern2 = new RegExp(`(return\\s+)${func}\\(`, 'g');
        if (pattern2.test(content)) {
            content = content.replace(pattern2, `$1await ${func}(`);
            modified = true;
        }

        // Pattern: standalone functionName(
        const pattern3 = new RegExp(`([^await\\s])${func}\\(`, 'g');
        if (pattern3.test(content)) {
            content = content.replace(pattern3, `$1await ${func}(`);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✓ Updated: ${path.relative(process.cwd(), filePath)}`);
        return true;
    }
    return false;
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            count += walkDir(filePath);
        } else if (file === 'route.ts') {
            if (updateFile(filePath)) {
                count++;
            }
        }
    });

    return count;
}

console.log('🔄 Updating API routes for async dataStore...\n');
const updated = walkDir(apiDir);
console.log(`\n✅ Updated ${updated} route files`);
