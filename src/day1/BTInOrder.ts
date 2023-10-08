
function walk(cur:BinaryNode<number> | null, path: number[]) {
    if(!cur) {
        return path;
    }

    walk(cur.left, path);
    path.push(cur.value);
    walk(cur.right, path);

    return path;
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    const path:number[] = [];
    walk(head, path);

    return path;
}