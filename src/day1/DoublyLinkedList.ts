type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = {value: item} as Node<T>

        this.length++;
        
        if(!this.head) {
            this.head = this.tail = node;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        const node: Node<T> = {value: item} as Node<T>

        this.validateIdx(idx);
        this.length++;

        let cur = this.head;

        for(let i = 0; cur && i < idx; ++i) {
            cur = cur.next;
        }

        if(cur) {
            node.prev = cur.prev;
            cur.prev = node;
            node.next = cur;

            if(node.prev) {
                node.prev.next = node;
            } 

            if(!node.next) {
                this.tail = node;
            }
        }
    }

    append(item: T): void {
        const node: Node<T> = {value: item} as Node<T>

        this.length++;
        
        if(!this.tail) {
            this.head = this.tail = node;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {
       let found = false;
       let cur = this.head;

        for(let i = 0; cur && i < this.length; ++i) {
            if(cur.value === item) {
                found = true;

                if(cur) {
                    this.bridgePointersForItemDeletion(cur);
                }

                break;
            }
        }

        return found ? cur?.value : undefined;
    }

    get(idx: number): T | undefined {
        this.validateIdx(idx);

        let cur = this.head;

        
        for(let i = 0; cur && i < idx; ++i) {
            cur = cur.next;
        }

        return cur?.value;
    }

    removeAt(idx: number): T | undefined {
        this.validateIdx(idx);
        
        let cur = this.head;

        for(let i = 0; cur && i < idx; ++i) {
            cur = cur.next;
        }

        let curValue = undefined;
        if(cur) {
            curValue = this.bridgePointersForItemDeletion(cur);
        }

        return curValue;
    }

    private validateIdx(idx: number) {
        if(idx >= this.length) {
            throw Error("oh no");
        }
    }

    private bridgePointersForItemDeletion(node: Node<T>): T | undefined {
        this.length--;

        if(this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        } else {
            if(node) {
                if(node.prev) {
                    node.prev.next = node.next;
                } 
        
                if(node === this.head) {
                    this.head = node.next;
                }
    
                if(node === this.tail) {
                    this.tail = node.prev;
                }

                if(node.next) {
                    node.next.prev = node.prev;
                } 
    
                node.prev = node.next = undefined;
            }
            return node.value;
        }
    }
}