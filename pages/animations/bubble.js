import { useEffect } from "react";
import styles from "../../styles/Bubble.module.css";

export default () =>  {
  useEffect(() => {
    let animate = (x) => {
      let wrapper = document.querySelector(`.${styles.parent}`);
      let ele = document.createElement('div');
      ele.className = styles.bubble;
      ele.style.left = `${x}px`;
      wrapper.appendChild(ele);
      setTimeout(() => wrapper.removeChild(ele), 2000);
    }

    window.onmousemove = e => animate(e.clientX)
  }, [])
  return (<>
    <div className={styles.parent}>
      {/* <div className={styles.bubble}>

      </div> */}
    </div>
  </>);
}