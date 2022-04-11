
import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectViedo = (video) => {setSelectedVideo(video);
  };
  const search = query => {
    youtube
    .search(query)
    .then(videos => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  };
    
  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[]);
  

  return (
  <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    <div className={styles.content}>
      {selectedVideo && (<div className={styles.detail}>
        <VideoDetail video={selectedVideo}/>
      </div>)}
      <div className={styles.list}>
        <VideoList videos={videos} 
        onVideoClick={selectViedo} 
        display={selectedVideo ? 'list' : 'grid'}/>
      </div>
    </div>
  </div>
  );
}

export default App;
