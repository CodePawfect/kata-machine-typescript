function walk(
    curr:number, 
    graph: WeightedAdjacencyList, 
    needle: number, 
    seen: boolean[], 
    path: number[]): boolean {

    if(seen[curr]) {
        return false;
    }

    seen[curr] = true;

    //recursion
    //pre
    path.push(curr);
    if(curr === needle) {
        return true;
    }

    //recurse
    const list = graph[curr];
    for(let i = 0; i < list.length; ++i) {
        const edge = list[i];

        if(walk(edge.to, graph, needle, seen, path)) {
            return true;
        }
    }

    //post
    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number, 
    needle: number): number[] | null {

    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(source, graph, needle, seen, path);

    if(path.length > 0) {
        return path;
    }

    return null;
}