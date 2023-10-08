export default function linear_search(haystack: number[], needle: number): boolean {
    for (let num of haystack) {
        if(num === needle) return true;
    }

    return false;
}