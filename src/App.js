import React, { useEffect, useState } from "react";
import { FormControl, Button, InputLabel, Input } from "@mui/material";
import "./App.css";
import Todo from "./components/Todo";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  console.log(todos);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data(),
          }))
        );
      });
  }, [input]);

  return (
    <div className="App">
      <h1> Firebase React </h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>{" "}
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todoArr) => (
          <Todo key={todoArr.id} todoArr={todoArr} />
        ))}
      </ul>
    </div>
  );
}

export default App;
