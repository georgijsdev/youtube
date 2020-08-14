import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import styles from './VideoCard.module.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className={styles.videoCard}>
            <img className={styles.videoCard__thumbnail} src={image} alt="" />
            <div className={styles.videoCard__info}>
                <Avatar className={styles.videoCard__avatar} 
                alt={channel} 
                src={channelImage}
                />
                <div className={styles.videoCard__text}>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                    {views} ● {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
