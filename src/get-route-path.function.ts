export const getRoutePath = (url: string): string[] => url.split(/\//).filter(Boolean);
