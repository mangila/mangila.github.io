const cache = new Map<string, any>();

export function getFromCache<T>(key: string): T | undefined {
  return cache.get(key);
}

export function setInCache<T>(key: string, value: T): void {
  cache.set(key, value);
}
