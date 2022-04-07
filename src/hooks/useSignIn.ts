import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateProps } from "../store/createStore";
import { onSignIn } from "../store/modules/session/actions";
import { useNavigation } from "@react-navigation/native";
// import { Container } from './styles';

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { session } = useSelector((state: StoreStateProps) => state.session);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const auth = getAuth();
      console.log(email, password);
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      // Salvar dados do usuário no redux
      dispatch(onSignIn(userAuth));
    } catch (error) {
      console.log("Erro", error);
    }
    //
  };

  return {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  };
};
