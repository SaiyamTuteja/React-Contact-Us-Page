// import "../../App.css";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation}`}>
      <div className={styles.logo}>
        <img src="./images/logo bg remove.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About Us</li>
        <li>Help</li>
      </ul>
    </nav>
  );
};

export default Navigation;
