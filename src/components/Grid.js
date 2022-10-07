import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import styles from "./Grid.module.css";

const draggableItems = [
  { id: 1, title: "Item 1", x: 0, y: 0 },
  { id: 2, title: "Item 2", x: 0, y: 0 },
  { id: 3, title: "Item 3", x: 0, y: 0 },
];

const Grid = () => {
  const [items, setItems] = useState(draggableItems);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "item",
      drop: (item, monitor) => {
        const { x, y } = monitor.getSourceClientOffset();
        const mappedItems = items.map((mappedItem) => {
          if (mappedItem.id === item.id) {
            return {
              ...mappedItem,
              x: x - 150,
              y: y,
            };
          }
          return mappedItem;
        });

        setItems(mappedItems);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [items]
  );

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
