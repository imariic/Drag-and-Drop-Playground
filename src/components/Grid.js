import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import styles from "./Grid.module.css";

const draggableItems = [
  { title: "Item 1", x: 30, y: 40 },
  { title: "Item 2", x: 100, y: 200 },
  { title: "Item 3", x: 76, y: 134 },
];

const Grid = () => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "item",
  }));

  const [items, setItems] = useState(draggableItems);

  return (
    <div ref={drop} className={styles.container}>
      <div className={styles.xAxis}></div>
      <div className={styles.yAxis}></div>
      {items.map((item) => (
        <Item key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Grid;
