import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useApi = (action = Function.prototype) => {
  const dispatch = useDispatch();
  return useEffect(() => {
    dispatch(action);
  }, []);
};
