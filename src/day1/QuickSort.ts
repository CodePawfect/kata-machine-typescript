import { idText } from "typescript";

function qs(arr: number[], lo: number, hi: number) {
    if(lo >= hi) return;

    let pivot = partition(arr, lo, hi);

    qs(arr, lo, pivot -1);
    qs(arr, pivot +1, hi);
}

function partition(arr: number[], lo: number, hi: number) {
    const pivot = arr[hi];
    let idx = -1;

    for(let i = 0; i < hi; ++i) {
        if(arr[i] <= pivot) {
            idx++;
            let temp = arr[idx]
            arr[idx] = arr[i];
            arr[i] = temp; 
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);
}