import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
<section className={styles.detail}>
    <iframe
    className={styles.video}
    type="text/html"
    title="youtube video player"
    width="100%"
    height="500px"
    src={`https://www.youtube.com/embed/${video.id}`}
    frameBorder="0"
    allowFullScreen
    ></iframe>
    <div className={styles.metadata}>
    <p>{`#${snippet.tags[0]}  #${snippet.tags[1]}  #${snippet.tags[2]}`}</p>
    
    </div>
    <h2 className={styles.title}>{snippet.title}</h2>
    <p className={styles.time}>{snippet.publishedAt}</p>
    <div className={styles.channel}>
    <p className={styles.channelName}>{snippet.channelTitle}</p>
    <button className={styles.subscribe}>SUBSCRIBE</button>
    </div>
    <pre className={styles.description}>{snippet.description}</pre>
    <button className={styles.moreBtn}>더보기</button>
</section>

);

export default VideoDetail;
