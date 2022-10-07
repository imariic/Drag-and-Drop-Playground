import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "item",
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={styles.container}
      style={{ top: item.y, left: item.x }}
    >
      {item.title}
    </div>
  );
};

export default Item;
