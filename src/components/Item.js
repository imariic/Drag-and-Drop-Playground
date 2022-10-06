import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging,
      };
    },
  }));

  return (
    <div
      ref={drag}
      className={styles.container}
      style={{ top: item.y, left: item.x }}
    >
      {item.title}
    </div>
  );
};

export default Item;
