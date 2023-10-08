function walk(cur:BinaryNode<number> | null, path: number[]) {
    if(!cur) {
        return path;
    }

    walk(cur.left, path);
    walk(cur.right, path);
    path.push(cur.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const path:number[] = [];
    walk(head, path);

    return path;
}