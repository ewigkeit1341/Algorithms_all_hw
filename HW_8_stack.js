class Stack {
    constructor() {
        this.MAX = 10;
        this.top = -1;
        this.a = new Array(this.MAX);
    }

    isEmpty() {
        return (this.top < 0);
    }

    push(x) {
        if (this.top >= (this.MAX - 1)) {
            console.log("Stack Overflow");
            return false;
        } else {
            this.a[++this.top] = x;
            console.log(x + " pushed into stack");
            return true;
        }
    }

    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top--];
        }
    }

    peek() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            return this.a[this.top];
        }
    }

    print() {
        for (let index = this.top; index > -1; index--) {
            console.log(" " + this.a[index]);
        }
    }
}

class SpecialStack {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack(); // дополнительный стек для отслеживания минимальных значений
    }

    push(x) {
        // Добавляем элемент в основной стек
        this.stack.push(x);

        // Если minStack пуст или новый элемент меньше либо равен текущему минимальному элементу
        if (this.minStack.isEmpty() || x <= this.minStack.peek()) {
            this.minStack.push(x);
        }
    }

    pop() {
        // Извлекаем элемент из основного стека
        let poppedElement = this.stack.pop();

        // Если извлеченный элемент равен текущему минимальному элементу, извлекаем его и из minStack
        if (poppedElement === this.minStack.peek()) {
            this.minStack.pop();
        }

        return poppedElement;
    }

    isEmpty() {
        return this.stack.isEmpty();
    }

    peek() {
        return this.stack.peek();
    }

    getMin() {
        // Возвращаем верхний элемент из minStack, который является минимальным
        if (this.minStack.isEmpty()) {
            console.log("Stack is empty, no minimum");
            return 0;
        } else {
            return this.minStack.peek();
        }
    }

    print() {
        this.stack.print();
    }
}

// Пример использования
let specialStack = new SpecialStack();
specialStack.push(10);
specialStack.push(20);
specialStack.push(5);
specialStack.push(30);
specialStack.push(1);

specialStack.print();
console.log("Minimum element: " + specialStack.getMin());

specialStack.pop();
specialStack.print();
console.log("Minimum element: " + specialStack.getMin());

specialStack.pop();
specialStack.print();
console.log("Minimum element: " + specialStack.getMin());
