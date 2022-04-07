import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onSignIn } from "../store/modules/session/actions";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>();

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    setError(undefined);
    setLoading(true);
    try {
      const auth = getAuth();
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      dispatch(onSignIn(userAuth));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    error,
  };
};
