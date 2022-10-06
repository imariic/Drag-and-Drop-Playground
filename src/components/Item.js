import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Item.module.css";

const Item = () => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "item",
  }));

  return (
    <div ref={drag} className={styles.container}>
      Item
    </div>
  );
};

export default Item;
