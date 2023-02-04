import { useEffect } from "react";
import styles from "../../styles/Bubble.module.css";

export default () => {

  useEffect(() => {
    const animet = (x, y) => {
      let wrapper = document.querySelector(`.${styles.parent}`);
      wrapper.childNodes.forEach(child => {
        if(child.className === styles.cursor) {
          child.remove();
        }
      })
      let ele = document.createElement('div');
      ele.className = styles.cursor;
      ele.style.left = `${x}px`;
      ele.style.top = `${y}px`;
      wrapper.appendChild(ele);
      // setTimeout(() => wrapper.removeChild(ele), 40);
    }

    window.onmousemove = e => animet(e.clientX, e.clientY);
  }, []);

  return (<>
  <div className={styles.parent}></div>
  </>)
}