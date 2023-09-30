import React from "react";
import { googleProvider, auth } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, googleProvider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/todo-list");
  };

  return (
    <div className="login-page">
      <p>Sign in with google to continue</p>
      <button className="google-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};
