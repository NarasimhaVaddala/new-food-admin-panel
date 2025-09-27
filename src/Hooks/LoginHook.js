import { useNavigate } from "react-router-dom";
import { showAxiosError } from "../../../deliery-boy/core/toast";
import { API } from "../../core/url";

export const useLoginHook = () => {
  const navigate = useNavigate();

  async function onLogin(data) {
    try {
      const resp = await API.post("/auth/admin-login", data);
      localStorage.setItem("token", resp.data.token);
      navigate("/orders");
    } catch (error) {
      console.log(error);

      showAxiosError(error);
    }
  }

  return {
    onLogin,
  };
};
