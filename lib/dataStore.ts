import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'app', 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

export function readData<T>(entity: string): T[] {
    const filePath = path.join(DATA_DIR, `${entity}.json`);

    if (!fs.existsSync(filePath)) {
        return [];
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error reading ${entity}.json:`, error);
        return [];
    }
}

export function writeData<T>(entity: string, data: T[]): void {
    const filePath = path.join(DATA_DIR, `${entity}.json`);

    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error writing ${entity}.json:`, error);
        throw error;
    }
}

export function addItem<T extends { id: string }>(entity: string, item: Omit<T, 'id'>): T {
    const items = readData<T>(entity);
    const newItem = {
        ...item,
        id: generateId(),
    } as T;

    items.push(newItem);
    writeData(entity, items);

    return newItem;
}

export function updateItem<T extends { id: string }>(entity: string, id: string, updates: Partial<T>): T | null {
    const items = readData<T>(entity);
    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        return null;
    }

    items[index] = { ...items[index], ...updates };
    writeData(entity, items);

    return items[index];
}

export function deleteItem(entity: string, id: string): boolean {
    const items = readData<any>(entity);
    const filteredItems = items.filter(item => item.id !== id);

    if (filteredItems.length === items.length) {
        return false; // Item not found
    }

    writeData(entity, filteredItems);
    return true;
}

export function getItemById<T extends { id: string }>(entity: string, id: string): T | null {
    const items = readData<T>(entity);
    return items.find(item => item.id === id) || null;
}

function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
