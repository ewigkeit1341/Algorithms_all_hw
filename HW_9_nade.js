class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }

    // --- Добавление элемента в начало ---
    pushToHead(data) {
        let newNode = new Node(data);
        newNode.setNext(this.head);
        this.head = newNode;
    }

    // --- Удаление первого элемента ---
    removeFirst() {
        if (this.head === null) {
            return false;
        }
        this.head = this.head.getNext();
        return true;
    }

    // --- Добавление элемента в конец ---
    pushToTail(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.getNext() !== null) {
            last = last.getNext();
        }
        last.setNext(newNode);
    }

    // --- Удаление последнего элемента ---
    removeLast() {
        if (this.head === null) {
            console.log("List is empty");
            return false;
        }

        let current = this.head;
        let previous = null;

        if (current.getNext() === null) { // если один элемент
            this.head = null;
        } else {
            while (current.getNext() !== null) {
                previous = current;
                current = current.getNext();
            }
            if (previous !== null) {
                previous.setNext(null);
            }
        }
        return true;
    }

    // --- Добавление элемента по индексу ---
    pushToIndex(index, data) {
        if (index < 0 || index > this.size()) {
            console.log("Index out of bounds");
            return false;
        }

        let newNode = new Node(data);

        if (index === 0) {
            newNode.setNext(this.head);
            this.head = newNode;
            return true;
        }

        let current = this.head;
        let jump = 0;
        while (jump < index - 1) {
            current = current.getNext();
            jump++;
        }

        newNode.setNext(current.getNext());
        current.setNext(newNode);
        return true;
    }

    // --- Удаление элемента по индексу ---
    remove(index) {
        if (index < 0 || index >= this.size()) {
            console.log("Index out of bounds");
            return false;
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let jump = 0;
        let previous = null;

        while (jump < index) {
            previous = current;
            current = current.getNext();
            jump++;
        }

        if (previous !== null) {
            previous.setNext(current.getNext());
        }
        return true;
    }

    // --- Получение элемента по индексу ---
    get(index) {
        if (index < 0 || index >= this.size()) {
            console.log("Index out of bounds");
            return -1;
        }

        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current.getData();
            }
            current = current.getNext();
            count++;
        }

        return -1;
    }

    // --- Подсчет количества элементов в списке ---
    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.getNext();
        }
        return count;
    }

    // --- Печать элементов списка ---
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.getData() + " ");
            current = current.getNext();
        }
    }
}

// Тестирование
let lists = new MyLinkedList();
console.log(" - pushToHead - "); 
lists.pushToHead(5);
lists.pushToHead(3);
lists.pushToHead(6);
lists.print();

console.log(" - removeFirst - "); 
lists.removeFirst();
lists.print();

console.log(" - pushToTail - "); 
lists.pushToTail(7);
lists.print();

console.log(" - removeLast - "); 
lists.removeLast();
lists.print();

console.log(" - pushToIndex - "); 
lists.pushToIndex(1, 10);
lists.print();

console.log(" - remove index- "); 
lists.remove(1);
lists.print();

console.log("get(1) = " + lists.get(1));     
console.log("Size JS = " + lists.size());
