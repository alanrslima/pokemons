import { useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateProps } from "../store/createStore";
import { onSignOut } from "../store/modules/session/actions";

export const useSignOut = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      const userAuth = await signOut(auth);

      // Salvar dados do usuário no redux
      dispatch(onSignOut());
      console.log("Signout feito com succeso", userAuth);
    } catch (error) {
      console.log("Erro", error);
    }
  };

  return {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    handleSignOut,
  };
};
