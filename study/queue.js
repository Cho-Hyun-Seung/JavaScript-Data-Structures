class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items)
    }
}

// 큐 생
const newQueue = new Queue()
console.log(newQueue.isEmpty())

// enqueue
newQueue.enqueue(10)
newQueue.enqueue(30)
newQueue.enqueue(60)
newQueue.enqueue(20)
newQueue.print()
console.log(newQueue.size())

// dequeue
newQueue.dequeue()
newQueue.print()

// peek
console.log(newQueue.peek());