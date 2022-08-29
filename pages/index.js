import Login from "../components/Login";
import styles from "../styles/Login.module.css";
import {useMoralis} from "react-moralis";

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  return <>{isAuthenticated ? (
    <div className={styles.loggedin_container}>
      Yahoo! You are logged in
      <button onClick= {logout}>Sign Out</button>
    </div>
   ):(
   <Login/>
  )}
  </>;
}
