class Stack {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue(element) {
        this.items.pop(element)
    }

    inEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items)
    }
}

// Create a new Stack
let newStack = new Stack()

// Push elements on the stack
newStack.push(1)
newStack.push(4)
newStack.push(6)
newStack.push(112)
console.log(newStack)
//display the stack's content
newStack.print()


//pop an element
newStack.pop()
console.log('pop', newStack)

//check if the stack is empty
newStack.inEmpty()
console.log('empty', newStack)