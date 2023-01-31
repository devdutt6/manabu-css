import styles from "../../styles/Circle.module.css";

export default ( ) => {
  let init = 0;
  const touched = (e) => {
    init += e.deltaY;
    const ele = document.querySelector(".child");
    console.log(ele.style.transform);
    let value = (init*20)/66.25;
    ele.style["rotate"] = `${value}deg `;
    // console.log(value);
  }

  return (<>
    <div className={styles.crcl} onWheel={(y) => { touched(y) }}>
      <div className="child">Text for child</div>
    </div>
  </>)
}