import fs from 'fs';
import path from 'path';
import { kv } from '@vercel/kv';

const DATA_DIR = path.join(process.cwd(), 'app', 'data');

// Check if KV is available (production/Vercel)
const isKVAvailable = () => {
    return !!(process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL);
};

// Ensure data directory exists for local development
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

export async function readData<T>(entity: string): Promise<T[]> {
    // Use KV in production, files locally
    if (isKVAvailable()) {
        try {
            const data = await kv.get<T[]>(`data:${entity}`);
            return data || [];
        } catch (error) {
            console.error(`Error reading from KV (${entity}):`, error);
            return [];
        }
    }

    // Fallback to file-based storage for local development
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

export async function writeData<T>(entity: string, data: T[]): Promise<void> {
    // Use KV in production
    if (isKVAvailable()) {
        try {
            await kv.set(`data:${entity}`, data);
            return;
        } catch (error) {
            console.error(`Error writing to KV (${entity}):`, error);
            throw new Error(`Failed to save data to Redis: ${error}`);
        }
    }

    // Fallback to file-based storage for local development
    const filePath = path.join(DATA_DIR, `${entity}.json`);
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error writing ${entity}.json:`, error);
        throw error;
    }
}

export async function addItem<T extends { id: string }>(entity: string, item: Omit<T, 'id'>): Promise<T> {
    const items = await readData<T>(entity);
    const newItem = {
        ...item,
        id: generateId(),
    } as T;

    items.push(newItem);
    await writeData(entity, items);

    return newItem;
}

export async function updateItem<T extends { id: string }>(entity: string, id: string, updates: Partial<T>): Promise<T> {
    const items = await readData<T>(entity);
    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        throw new Error('Item not found');
    }

    items[index] = { ...items[index], ...updates };
    await writeData(entity, items);

    return items[index];
}

export async function deleteItem(entity: string, id: string): Promise<boolean> {
    const items = await readData<any>(entity);
    const filteredItems = items.filter(item => item.id !== id);

    if (filteredItems.length === items.length) {
        throw new Error('Item not found');
    }

    await writeData(entity, filteredItems);
    return true;
}

export async function getItemById<T extends { id: string }>(entity: string, id: string): Promise<T | null> {
    const items = await readData<T>(entity);
    return items.find(item => item.id === id) || null;
}

function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
