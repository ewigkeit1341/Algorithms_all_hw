class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

 
    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BinaryTree(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BinaryTree(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    
    findMin() {
        let current = this;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

 
    delete(value) {
        if (value < this.value) {
            if (this.left !== null) {
                this.left = this.left.delete(value);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right = this.right.delete(value);
            }
        } else {
          
            if (this.left === null && this.right === null) {
                return null; 
            } else if (this.left === null) {
                return this.right; 
            } else if (this.right === null) {
                return this.left; 
            } else {
             
                const minValue = this.right.findMin();
                this.value = minValue;
                this.right = this.right.delete(minValue);
            }
        }
        return this;
    }

    inOrder() {
        const result = [];
        if (this.left !== null) {
            result.push(...this.left.inOrder());
        }
        result.push(this.value);
        if (this.right !== null) {
            result.push(...this.right.inOrder());
        }
        return result;
    }
}

const tree = new BinaryTree(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(14);
tree.insert(13);

console.log("До удаления:", tree.inOrder()); // [1, 3, 4, 6, 7, 8, 10, 13, 14]
tree.delete(10);
console.log("После удаления:", tree.inOrder()); // [1, 3, 4, 6, 7, 8, 13, 14]
