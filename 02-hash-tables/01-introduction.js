class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(n)

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    console.log(this.data);
    return this.data;
  } //O(1)

  get(key) {
    let address = this._hash(key);
    const current = this.data[address];

    if (current) {
      for (let i = 0; i < current.length; i++) {
        {
          if (current[i][0] === key) {
            return current[i][1];
          }
        }
      }
    } //can be O(1) and O(n) depends on memory and number of keys
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.log(keysArray);
    return keysArray;
  } // O(n)
}
const hashTable = new HashTable(50);
hashTable.set("grapes", 10000);
hashTable.set("apples", 54);
hashTable.set("oranges", 2);
hashTable.keys();

/*
arrays and hash tables

        arrays    hash tables
search    O(n)       O(1)
lookup    O(1)       O(1)
push      O(1)       
insert    O(n)       O(1)
delete    O(n)       O(1)
*/
