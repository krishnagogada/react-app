export function add(a, b) {
    if (typeof(a) === 'string' || typeof(b) === 'string') {
        return null;
    }
    return a + b;
}
