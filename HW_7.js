class DynamicArray {
    constructor(capacity = 10) {
        this.array = new Array(capacity);
        this.count = 0; // текущее количество элементов
        this.size = capacity; // размер внутреннего массива
        this.k = 2; // коэффициент расширения
    }

    // добавляем элементы в конец 
    add(data) {
        // расширяем массив
        if(this.count === this.size) {
            this.growSize();
        }

        this.array[this.count] = data;
        this.count++;
    }

    // расширяем внутренний массив
    growSize() {
        let temp = new Array(this.size * this.k);
        for(let i = 0; i < this.size; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp; 
        this.size *= this.k;
    }

    // добавление по индексу
    addAt(index, data) {
        if (this.count === this.size) {
            this.growSize();
        }

        for (let i = this.count - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i]; 
        }
        this.array[index] = data; 
        this.count++;
    }

    // удаляем последний элемент    
    remove() {
        if (this.count > 0) {
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

    // удаление по индексу
    removeAt(index) {
        if (this.count > 0 && index < this.count) {
            for (let i = index; i < this.count - 1; i++) {
                this.array[i] = this.array[i + 1]; 
            }
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

    // изменяет элемент по индексу
    set(index, data) {
        if (index >= 0 && index < this.count) {
            this.array[index] = data;
        }
    }

    // удаляет все элементы
    clean() {
        this.array = new Array(this.size);
        this.count = 0;
    }

    // проверяет, существует ли элемент
    contains(data) {
        for (let i = 0; i < this.count; i++) {
            if (this.array[i] === data) {
                return true;
            }
        }
        return false;
    }

    // проверяет, пуст ли массив
    isEmpty() {
        return this.count === 0;
    }
}

// Пример использования:
let da = new DynamicArray();
da.add(1);
da.add(2);
da.add(3);
da.add(4);
da.add(5);

da.set(2, 10); // Изменение элемента
console.log(da.contains(10)); // true
console.log(da.isEmpty()); // false

da.clean(); // Очистка массива
console.log(da.isEmpty()); // true
