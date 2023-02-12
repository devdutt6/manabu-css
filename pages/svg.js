import Image from 'next/image';
import left2 from '../public/left2.svg';
import styles from '../styles/Svg.module.css'

export default () => {
  return (
    <>
    <div className={styles.left}>
      {/* <img src={left2} className={styles.fit} alt='next' /> */}
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="palette">
        <path
          d="M13 19L6.70711 12.7071C6.31658 12.3166 6.31658 11.6834 6.70711 11.2929L13 5"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        <path
          d="M18 19L18 5"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </g>
      </svg>
      <svg className={styles.colored} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="palette">
        <path
          d="M13 19L6.70711 12.7071C6.31658 12.3166 6.31658 11.6834 6.70711 11.2929L13 5"
          stroke={`var(--color_grey)`}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        <path
          d="M18 19L18 5"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </g>
      </svg>
    </div>
    </>
  )
}