import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useApi = (action) => {
  const dispatch = useDispatch();
  return useEffect(() => {
    dispatch(action);
  }, [dispatch]);
};
