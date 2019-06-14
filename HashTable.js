class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    // loop through the length of input key, up to a maximum of 100 characters.  if the key is > 100, just do the first 100
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    let tempArr = [key, value];

    if (!this.keyMap[index]) {
      this.keyMap[index] = [tempArr];
    } else {
      this.keyMap[index].push(tempArr);
    }
  }

  get(key) {
    let index = this._hash(key);
    let tempArr = this.keyMap[index];

    if (!tempArr) return undefined;

    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i][0] === key) {
        return tempArr[i][1];
      }
    }

    return undefined;
  }

  keys() {
    let arr = [];
    let obj = {};

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!obj.hasOwnProperty(this.keyMap[i][j][0])) {
            arr.push(this.keyMap[i][j][0]);
            obj[this.keyMap[i][j][0]] = 1;
          } else {
            obj[this.keyMap[i][j][0]]++;
          }
        }
      }
    }

    return arr;
  }

  values() {
    let arr = [];
    let obj = {};

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!obj.hasOwnProperty(this.keyMap[i][j][1])) {
            arr.push(this.keyMap[i][j][1]);
            obj[this.keyMap[i][j][1]] = 1;
          } else {
            obj[this.keyMap[i][j][1]]++;
          }
        }
      }
    }

    return arr;
  }
}

let hash = new HashTable();
