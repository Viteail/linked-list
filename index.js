class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
      return;
    }
    let next = this.headNode;
    while (next.nextNode !== null) next = next.nextNode;
    next.nextNode = new Node(value);
  }

  prepend(value) {
    let tmp = this.headNode;
    this.headNode = new Node(value);
    this.headNode.nextNode = tmp;
  }

  size() {
    if (this.headNode === null) return 0;
    let tmp = this.headNode;
    let count = 1;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      count++;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let tmp = this.headNode;
    if (tmp === null) return null;
    while (tmp.nextNode !== null) tmp = tmp.nextNode;
    return tmp;
  }

  at(index) {
    let tmp = this.headNode;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  pop() {
    let tmp = this.headNode;
    if (tmp.nextNode === null) {
      this.headNode = null;
      return;
    }
    while (tmp.nextNode.nextNode !== null) tmp = tmp.nextNode;
    tmp.nextNode = null;
  }

  contains(value) {
    let tmp = this.headNode;
    if (tmp === null) return;
    while (tmp.value !== value) {
      if (tmp.nextNode === null) return false;
      tmp = tmp.nextNode;
    }
    return true;
  }

  find(value) {
    let tmp = this.headNode;
    if (tmp === null) return;
    let index = 0;
    while (tmp.value !== value) {
      if (tmp.nextNode === null) return null;
      tmp = tmp.nextNode;
      index++;
    }
    return index;
  }

  toString() {
    let tmp = this.headNode;
    let string = '';
    while (tmp !== null) {
      string += `( ${tmp.value} ) => `;
      if (tmp.nextNode === null) {
        string += `${tmp.nextNode}`;
      }
      tmp = tmp.nextNode;
    }
    return string;
  }

  insertAt(value, index) {
    let tmp = this.headNode;
    let node = new Node(value);
    if (index === 0) {
      node.nextNode = tmp;
      this.headNode = node;
      return;
    }
    let count = 0;
    while (count !== index) {
      count++;
      tmp = tmp.nextNode;
    }
    node.nextNode = tmp;
    this.at(count - 1).nextNode = node;
  }

  removeAt(index) {
    let tmp = this.headNode;
    let count = 0;
    while (count !== index) {
      count++;
      tmp = tmp.nextNode;
    }
    tmp = null;

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const linkedList = new LinkedList();
linkedList.append('xd nig');
linkedList.append('pula');
linkedList.append('eblan');
linkedList.append('huila proasta');
linkedList.removeAt(2);
console.log(linkedList);
