function find(node: BinaryNode<number> | null, needle: number): boolean {
    if(!node) {
        return false;
    }

    if(node.value === needle) {
        return true;
    }

    if(needle > node.value) {
        return find(node.right, needle);
    } else {
        return find(node.left, needle);
    }
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return find(head, needle);
}