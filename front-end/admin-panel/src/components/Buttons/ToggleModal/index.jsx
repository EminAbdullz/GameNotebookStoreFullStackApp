import { useDispatch } from "react-redux";

function ToggleModal({ action = Function.prototype, text }) {

  const dispatch = useDispatch();

  return <button onClick={() => dispatch(action())}>{text}</button>;
}

export default ToggleModal;
