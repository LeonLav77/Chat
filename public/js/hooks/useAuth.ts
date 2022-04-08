import { useContext } from "react";
import { LoginProps } from "../components/HomePage/UserAuth/Login/Login";
import { AuthUserContext } from "../context/AuthUserContext";

interface AuthContextInterface extends LoginProps {
  //login
  //register
  //...
  guest?: boolean;
  setGuest?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function useAuth() {
  return useContext<AuthContextInterface>(AuthUserContext);
}
