export default class MinHeap {
    public length: number;
    public values: number[];

    constructor() {
        this.length = 0;
        this.values = [];
    }

    insert(value: number): void {
        this.values[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if(this.length === 0) {
            return -1;
        }

        const out = this.values[0];
        this.length--;
        if(this.length === 0) {
            this.values = [];
            return out;
        }

        this.values[0] = this.values[this.length]; 
        this.heapifyDown(0);
        return out;
    }

    heapifyUp(idx: number): void {
        if(idx === 0) {
            return;
        }
        
        const value = this.values[idx];
        const parentIdx = this.parent(idx);
        const parentValue = this.values[parentIdx];

        if(value < parentValue) {
            this.values[parentIdx] = value;
            this.values[idx] = parentValue;
            this.heapifyUp(parentIdx);
        }
    }

    heapifyDown(idx: number): void { 
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if(idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const value = this.values[idx];
        const leftValue = this.values[leftIdx];
        const rightValue = this.values[rightIdx];

        if(leftValue > rightValue && value > rightValue) {
            this.values[idx] = rightValue;
            this.values[rightIdx] = value;
            this.heapifyDown(rightIdx);
        } else if(rightValue > leftValue && value > leftValue) {
            this.values[idx] = leftValue;
            this.values[leftIdx] = value;
            this.heapifyDown(leftIdx);
        }
    }

    leftChild(idx: number): number {
        return idx * 2 +1;
    }

    rightChild(idx: number): number {
        return idx * 2 +2;
    }

    parent(idx: number): number {
        return Math.floor((idx -1) /2);
    }
}