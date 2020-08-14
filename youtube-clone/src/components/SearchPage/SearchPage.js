import React from 'react'
import {ChannelRow, VideoRow} from '..'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import styles from './SearchPage.module.css'

function SearchPage() {
    return (
        <div className={styles.searchPage}>
            <div className={styles.searchPage__filter}>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://cdn1.vectorstock.com/i/thumb-large/87/55/young-blond-smiling-man-face-avatar-positive-male-vector-17618755.jpg"
                channel="GeorgijsDev"
                verified
                subs="209K"
                noOfVideos={74}
                description="Where you can find awesome programming tuts and development career advices"
            />
            <hr />

            <VideoRow 
                views="1.2M"
                subs="209K"
                description="Where you can find awesome programming tuts and development career advices"
                timestamp="1 day ago"
                channel="GeorgijsDev"
                title="Let's build a portfolio"
                image="https://www.greenmangaming.com/newsroom/wp-content/uploads/2017/08/youtube-logo1.jpg"
            />
            <VideoRow 
                views="1.2M"
                subs="209K"
                description="Where you can find awesome programming tuts and development career advices"
                timestamp="1 day ago"
                channel="GeorgijsDev"
                title="Let's build a portfolio"
                image="https://www.greenmangaming.com/newsroom/wp-content/uploads/2017/08/youtube-logo1.jpg"
            />
            <VideoRow 
                views="1.2M"
                subs="209K"
                description="Where you can find awesome programming tuts and development career advices"
                timestamp="1 day ago"
                channel="GeorgijsDev"
                title="Let's build a portfolio"
                image="https://www.greenmangaming.com/newsroom/wp-content/uploads/2017/08/youtube-logo1.jpg"
            />
        </div>
    )
}

export default SearchPage
