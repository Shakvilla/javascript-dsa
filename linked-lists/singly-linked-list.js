class LinkedList {
  constructor(v) {
    this.head = {
      value: v,
      next: null,
    };

    this.tail = this.head;
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
