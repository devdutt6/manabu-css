import { useEffect, useRef } from "react";
import styles from "../styles/Intercept.module.css";

export default () => {
  const parentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // console.log(entry);
        if( entry.isIntersecting ){
          entry.target.classList.add(`${styles.show}`);
        }
        else{
          entry.target.classList.remove(`${styles.show}`);
        }
      })
    });
    // const hiddenElems = document.querySelectorAll(`.${styles.element}`)
    // console.log(parentRef.current.childNodes)
    parentRef.current.childNodes.forEach(el => observer.observe(el));
  },[parentRef])

  return (
    <>
    <div className={styles.parent} ref={parentRef}>
    {/* <div className={styles.parent}> */}
      <div className={`${styles.element1} ${styles.element}`}></div>
      <div className={`${styles.element2} ${styles.element}`}></div>
      <div className={`${styles.element3} ${styles.element}`}></div>
    </div>
    </>
  )
}