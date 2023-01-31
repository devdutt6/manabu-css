import { useEffect } from "react";
import styles from "../../styles/Paralax.module.css";

export default () => {

  useEffect(() => {
    const track = document.querySelector(`.${styles.imagetrack}`);
    window.onmousedown = e => {
      track.dataset.mouseAt = e.clientX;
    }
    window.onmousemove = e => {
      if(track.dataset.mouseAt === "0") return;
      const mouseDelta = parseFloat(track.dataset.mouseAt) - e.clientX;
      const maxDelta = parseFloat(window.innerWidth/2);

      const perc = (mouseDelta/maxDelta)*-100;
      const nextPerc = perc + parseFloat(track.dataset.nextPercentage);
      // console.log(nextPerc);

      track.dataset.percentage = nextPerc;
      // track.style.transform = `translate(${nextPerc}%, -50%)`;
      track.animate({
        transform: `translate(${nextPerc}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      for(const image of track.getElementsByClassName(`${styles.image}`)){
        // image.style.objectPosition = `${nextPerc+100} 50%`
        console.log(image);
        image.animate({
          objectPosition: `${100+nextPerc}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }
    window.onmouseup = e => {
      track.dataset.mouseAt = "0";
      track.dataset.nextPercentage = track.dataset.percentage;
    }
  }, [])

  // const clicked = () => {

  // }

  return(<>
    <div className={styles.parent}>
      <div className={styles.imagetrack} data-mouse-at="0" data-next-percentage="0">
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1472140853566-0d69e54c2c18" />
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1467218958640-6bfb1bb56863" />
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1496277195689-21125faa0eeb" />
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1464268677664-166ed687faa5" />
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1464537356976-89e35dfa63ee" />
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1457545255860-f9dc39332def" />
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1" />
        <img draggable="false" className={styles.image} src="https://images.unsplash.com/photo-1511497584788-876760111969" />
      </div>
    </div>
  </>)
}