import React from "react";
import styles from "./styles.module.css";
import Card from "@/components/card";
import { mockTodos } from "@/components/mock";

const Todos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {mockTodos.map(todo => {
          return (
            <Card
              key={todo.id}
              name={todo.name}
              description={todo.description}
              linkLabel={todo.linkLabel}
            />
          );
        })}
      </div>
      {/* Pagination */}
      {/* <div>hello world</div> */}
    </div>
  );
};

export default Todos;
