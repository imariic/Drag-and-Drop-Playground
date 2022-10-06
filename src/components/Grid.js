import React from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import styles from "./Grid.module.css";

const Grid = () => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "item",
  }));

  return (
    <div ref={drop} className={styles.container}>
      <div className={styles.xAxis}></div>
      <div className={styles.yAxis}></div>
      <Item />
    </div>
  );
};

export default Grid;
