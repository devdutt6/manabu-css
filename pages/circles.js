import { useEffect } from "react";
import styles from "../styles/Circles.module.css";

export default () => {

  useEffect(() => {
    let parentEle = document.querySelector(`.${styles.parent}`);

    parentEle.addEventListener('click', () => {
      let animated = document.querySelectorAll(`.${styles.circleani}`);
      // console.log(animated);
      animated.forEach(el => {
        el.classList.remove(`${styles.circleani}`)
      });
    })
  }, [])

  return(<>
    <div className={styles.parent}>
      <div className={`${styles.circle1} ${styles.circleani}`}>
        <div className={`${styles.circle2} ${styles.circleani}`}>
          <div className={`${styles.circle3} ${styles.circleani}`}>
          </div>
        </div>
      </div>
    </div>
  </>)
}