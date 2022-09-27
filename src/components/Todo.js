import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { db } from "../firebase";
import styles from "./Todo.module.css";

const Todo = ({ todoArr }) => {
  const deleteTodo = () => {
    db.collection("todos").doc(todoArr.id).delete();
  };
  return (
    <List className={styles.todo__list}>
      <ListItem>
        <ListItemAvatar />
        <ListItemText
          primary={todoArr.item.todo}
          secondary={todoArr.item.todo}
        />
      </ListItem>
      <DeleteForeverIcon fontSize="large" onClick={deleteTodo} />
    </List>
  );
};

export default Todo;
