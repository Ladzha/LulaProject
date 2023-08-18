import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    verifyMyToken();
  }, []);

  const verifyMyToken = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/verify");
      if (res.status === 200) return setRedirect(true);
      setRedirect(false)
    //   navigate("/login");
    } catch (error) {
      setRedirect(true);
      navigate("/");
    }
  };
  return redirect ? props.children : null;
};
export default Auth;
