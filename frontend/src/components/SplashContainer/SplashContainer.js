import styles from "./SplashContainer.module.css";

const SplashContainer = () => {
  return (
    <div className={styles.splashcontainer}>
        <div><img src='https://images5.alphacoders.com/817/817120.jpg'></img></div>
      <div className={styles.slogan}>Discover and share your favorite bagels.</div>
    </div>
  );
};

export default SplashContainer;
