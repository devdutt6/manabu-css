import { useEffect } from "react";
import styles from "../../styles/Slide.module.css";

export default () => {

  useEffect(() => {
    let left = document.querySelector(`#${styles.left_side}`);

    let handle = e => {
      let dec = e.clientX/window.innerWidth * 100;
      left.style.width = `${dec}%`;
    }

    document.onmousemove = e => handle(e);
    // document.onclick = e => handleClick();
  }, [])

  return (<>
    <div className={styles.side} id={styles.left_side}>
      <p className={styles.title}>With Your Peers</p>
    </div>
    <div className={styles.side} id={styles.right_side}>
      <p className={styles.title}>With Your Squad</p>
    </div>
  </>)
}