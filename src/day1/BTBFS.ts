export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    if(!head) {
        return false;
    }
    
    const q = [head];

    while(q.length > 0) {
        let cur: BinaryNode<number> | undefined = q.shift();

        if(cur?.value === needle)  {
            return true;
        }

        if(cur?.left) {
            q.push(cur.left);
        }

        if(cur?.right) {
            q.push(cur.right);
        }
    }

    return false;
}