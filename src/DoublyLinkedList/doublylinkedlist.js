import { Node } from "./node";

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);
    if (this.tail === null) {
      this.tail = node;
      this.head = node;
      return;
    }

    const oldTail = this.tail;
    this.tail = node;
    this.tail.prev = oldTail;
    oldTail.next = this.tail;
  }
  prepend(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    const oldHead = this.head;
    this.head = node;
    this.head.next = oldHead;
    oldHead.prev = this.head;
  }

  remove(data) {
    if (this.head === null) {
      // tail will also be empty
      return false;
    }

    if (this.head.data === data) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return true;
      }

      this.head = this.head.next;
      this.head.prev = null;
      return true;
    }

    let currentNode = this.head;

    while (currentNode.next !== null && currentNode.data !== data) {
      currentNode = currentNode.next;
    }

    if (currentNode.data === data) {
      console.log(currentNode.data);
      if (currentNode.next !== null) {
        let next = currentNode.next;
        currentNode = currentNode.prev;
        currentNode.next = next;
        next.prev = currentNode;
        return true;
      }
      this.tail = this.tail.prev;
      this.tail.next = null;

      return true;
    }
    return false;
  }
  removeFromHead() {}
  removeFromTail() {}
}

export { DoublyLinkedList };
