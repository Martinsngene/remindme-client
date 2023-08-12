import React from "react";
import styles from "./styles.module.css";
import Card from "@/components/card";
import { mockTodos } from "@/components/mock";
import { Button } from "@/components/buttons";

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
      <div className={styles.button_container}>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Todos;
