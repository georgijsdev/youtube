import React from 'react'
import styles from './VideoRow.module.css'

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
  return (
    <div className={styles.videoRow}>
      <img src={image} alt="" />
      <div className={styles.videoRow__text}>
        <h3>{title}</h3>
        <p className={styles.videoRow__headline}>
          {channel} ●
          {" "}
          <span className={styles.videoRow__subs}>
            <span className={styles.videoRow__subsNumber}>{subs}</span> Subscribers
          </span>
          {" "}
           {views} views ● {timestamp}
        </p>
        <p className={styles.videoRow__description}>
          {description}
        </p>
      </div>

    </div>
  )
}

export default VideoRow
