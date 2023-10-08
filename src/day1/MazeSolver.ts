const dir = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
]

function walk(maze: string[], wall: string, end: Point, cur: Point, seen: boolean[][], path: Point[]): boolean {
    //base cases
    //of the map
    if(cur.x < 0 || cur.x >= maze[0].length || cur.y < 0 || cur.y >= maze.length) {
        return false;
    }

    //on a wall
    if(maze[cur.y][cur.x] === wall) {
        return false;
    }

    //already seen it
    if(seen[cur.y][cur.x]) {
        return false;
    }
    
    //reached the end
    if(cur.x === end.x && cur.y === end.y) {
        path.push(end);
        return true;
    }

    //pre recursion
    seen[cur.y][cur.x] = true;
    path.push(cur);

    //recurse
    for(let i = 0; i < dir.length; i++) {
        const[x, y] = dir[i];
        if(walk(maze, wall, end, {
            x: cur.x + x,
            y: cur.y + y,
        }, seen, path)) {
            return true;
        };
    }

    //post recursion
    path.pop();

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}