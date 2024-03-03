class ArrayClass {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index) {
    const item = this.data[index];

    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new ArrayClass();

array.push("a");
array.push("b");
array.push("c");
array.push("d");
array.push("e");
array.push("f");

array.pop();

array.delete(1);

array.shiftItems(1);

console.log(array);
console.log(array.get(0));
