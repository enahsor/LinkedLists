import React from "react";
import { DoublyLinkedList } from "./DoublyLinkedList/doublylinkedlist";

export default function App() {
  React.useEffect(() => {
    const list = new DoublyLinkedList();

    list.append(10);
    list.append(11);
    list.append(12);

    list.prepend(0);
    console.log(list.remove(0));
  }, []);

  return <div className="App"></div>;
}
