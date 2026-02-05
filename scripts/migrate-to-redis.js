/**
 * Migration script to copy data from JSON files to Upstash Redis
 * Run this ONCE after setting up Redis to migrate existing data
 * 
 * Usage: node scripts/migrate-to-redis.js
 */

const fs = require('fs');
const path = require('path');

// Change this to your Redis REST API URL from Vercel
const KV_REST_API_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
    console.error('❌ Error: Redis environment variables not set!');
    console.error('Make sure KV_REST_API_URL and KV_REST_API_TOKEN are set in your environment.');
    console.error('You can find these in your Vercel project settings after linking Upstash Redis.');
    process.exit(1);
}

const dataDir = path.join(__dirname, '..', 'app', 'data');

async function setKV(key, value) {
    const response = await fetch(`${KV_REST_API_URL}/set/${key}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${KV_REST_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value)
    });

    if (!response.ok) {
        throw new Error(`Failed to set ${key}: ${response.statusText}`);
    }

    return await response.json();
}

async function migrateFile(filename) {
    const filePath = path.join(dataDir, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`⏭️  Skipping ${filename} (file not found)`);
        return;
    }

    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(content);
        const entity = filename.replace('.json', '');
        const key = `data:${entity}`;

        await setKV(key, data);
        console.log(`✅ Migrated ${entity}: ${data.length} items`);
    } catch (error) {
        console.error(`❌ Error migrating ${filename}:`, error.message);
    }
}

async function migrate() {
    console.log('🚀 Starting data migration to Upstash Redis...\n');

    const entities = [
        'admin.json',
        'careers.json',
        'services.json',
        'testimonials.json',
        'techStack.json',
        'leaders.json',
        'employees.json',
        'blogs.json',
        'projects.json',
        'kpvTalk.json',
        'caseStudies.json'
    ];

    for (const entity of entities) {
        await migrateFile(entity);
    }

    console.log('\n✨ Migration complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Deploy your app to Vercel');
    console.log('2. Test CRUD operations in production admin');
    console.log('3. Verify data persists across deployments');
}

migrate().catch(error => {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
});
