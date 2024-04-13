class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element)
    }

    pop(element) {
        this.items.pop(element)
    }

    inEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items)
    }
}

// 스택 생성
let newStack = new Stack()

// 스택 push
newStack.push(1)
newStack.push(4)
newStack.push(6)
newStack.push(112)
console.log(newStack)


// 스택 출력
newStack.print()


//스택 pop
newStack.pop()
console.log('pop', newStack)

//스택 empty 체크
newStack.inEmpty()
console.log('empty', newStack)