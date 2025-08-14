import { MMKV } from 'react-native-mmkv';

// Initialize MMKV storage instance
export const storage = new MMKV();

// Storage key type
export type StorageKey = string;

/**
 * Set a value in storage
 */
export const setItem = <T>(key: StorageKey, value: T): void => {
  try {
    if (value === undefined || value === null) {
      storage.delete(key);
      return;
    }
    
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      storage.set(key, value);
    } else {
      storage.set(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error(`Storage setItem error for key "${key}":`, error);
  }
};

/**
 * Get a value from storage
 */
export const getItem = <T>(key: StorageKey, defaultValue?: T): T | null => {
  try {
    if (!storage.contains(key)) {
      return defaultValue ?? null;
    }

    const value = storage.getString(key);
    if (value === undefined) {
      return defaultValue ?? null;
    }

    // Try to parse as JSON, fallback to string
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  } catch (error) {
    console.error(`Storage getItem error for key "${key}":`, error);
    return defaultValue ?? null;
  }
};

/**
 * Remove an item from storage
 */
export const removeItem = (key: StorageKey): void => {
  try {
    storage.delete(key);
  } catch (error) {
    console.error(`Storage removeItem error for key "${key}":`, error);
  }
};

/**
 * Check if a key exists
 */
export const hasKey = (key: StorageKey): boolean => {
  try {
    return storage.contains(key);
  } catch (error) {
    console.error(`Storage hasKey error for key "${key}":`, error);
    return false;
  }
};

/**
 * Get all storage keys
 */
export const getAllKeys = (): string[] => {
  try {
    return storage.getAllKeys();
  } catch (error) {
    console.error('Storage getAllKeys error:', error);
    return [];
  }
};

/**
 * Clear all storage
 */
export const clear = (): void => {
  try {
    storage.clearAll();
  } catch (error) {
    console.error('Storage clear error:', error);
  }
};

/**
 * Get storage size in bytes
 */
export const getSize = (): number => {
  try {
    return storage.size;
  } catch (error) {
    console.error('Storage getSize error:', error);
    return 0;
  }
};
