import { DoublyLinkedList } from "./doublylinkedlist";
import { Node } from "./node";

describe("Prepend", () => {
  test("Adds to front of list", () => {
    const list = new DoublyLinkedList();

    list.prepend(2);
    list.prepend(1);
    list.prepend(0);

    expect(list.head.data).toBe(0);
    expect(list.head.next.data).toBe(1);
    expect(list.tail.data).toBe(2);

    expect(list.tail.prev.data).toBe(1);
    expect(list.tail.prev.prev.data).toBe(0);

    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();
  });
});

describe("Append", () => {
  test("Adds to end of list", () => {
    const list = new DoublyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.tail.data).toBe(3);

    expect(list.tail.prev.prev.data).toBe(1);
    expect(list.tail.prev.data).toBe(2);
    expect(list.tail.next).toBe(null);
  });
});

describe("Remove", () => {
  test("Finds and removes node from list", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.remove(2)).toBe(true);
    expect(list.head.next.data).toBe(3);

    expect(list.remove(1)).toBe(true);
    expect(list.head.data).toBe(3);

    const list2 = new DoublyLinkedList();

    list2.prepend(4);
    list2.prepend(3);
    list2.prepend(2);
    list2.prepend(1);

    //Remove from head
    expect(list2.remove(1)).toBe(true);
    expect(list2.head.data).toBe(2);

    //Remove from tail
    expect(list2.remove(4)).toBe(true);
    expect(list2.tail.data).toBe(3);
    expect(list2.tail.next).toBeNull();
  });
});
