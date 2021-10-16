const KEY = 'search';

export function getCache(): any {
    return JSON.parse(localStorage.getItem(KEY) as string) ?? [];
}

export function setCache(value: any): void {
    if (value) {
        localStorage.setItem(KEY, JSON.stringify(value));
    }
}