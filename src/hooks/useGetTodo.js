import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTodo = () => {
  const [todoList, setTodoList] = useState([]);

  const todoListRef = collection(db, "todolist");

  const { userID } = useGetUserInfo();

  const getTodoList = async () => {
    let unsubscribe;
    try {
      const queryTodo = query(
        todoListRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      onSnapshot(queryTodo, (snapshot) => {
        let docs = [];

        unsubscribe = snapshot.forEach((doc) => {
          const data = doc.data();

          const id = doc.id;

          docs.push({ ...data, id });
        });

        setTodoList(docs);
      });
    } catch (err) {
      console.log(err);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getTodoList();
  });

  return { todoList };
};
