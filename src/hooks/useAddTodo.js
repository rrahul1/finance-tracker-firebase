import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export function useAddTodo() {
  let todoRef = collection(db, "todo");

  const { userID } = useGetUserInfo();

  const addTodo = async ({ description, type }) => {
    await addDoc(todoRef, {
      userID,
      description,
      type,
      createdAt: serverTimestamp(),
    });
  };

  return { addTodo };
}
