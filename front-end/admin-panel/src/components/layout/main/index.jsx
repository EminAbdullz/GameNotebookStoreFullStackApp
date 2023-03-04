import styles from "./style/index.module.scss";

function Main(props) {
  return <main className={styles.main}>{props.children}</main>;
}

export default Main;
