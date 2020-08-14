import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

import styles from './ChannelRow.module.css';

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return (
    <div className={styles.channelRow}>
      <Avatar className={styles.channelRow__logo} alt={channel} src={image} />
      <div className={styles.channelRow__text}>
        <h4>{channel} {verified && <VerifiedIcon />}</h4>
        <p>
          {subs} subscribers ● {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
