import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import './index.css'

function App() {
  const [videoType, setVideoType] = useState('hls');
  const [url, setUrl] = useState('');

  const handleTypeChange = (e) => {
    setVideoType(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const getDefaultValue = () => {
    switch (videoType) {
      case 'flv':
        return 'http://www.example.com/video.flv';
      case 'rtmp':
        return 'rtmp://www.example.com/video';
      case 'hls':
        return 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8';
      case 'dash':
        return 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd';
      case 'mp4':
        return 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
      default:
        return '';
    }
  };

  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Select Video Type:</legend>
          <label htmlFor="hls">
            <input type="radio" id="hls" name="type" value="hls" checked={videoType === 'hls'} onChange={handleTypeChange} />
            HLS
          </label>
          <label htmlFor="flv">
            <input type="radio" id="flv" name="type" value="flv" checked={videoType === 'flv'} onChange={handleTypeChange} />
            FLV
          </label>
          <label htmlFor="rtmp">
            <input type="radio" id="rtmp" name="type" value="rtmp" checked={videoType === 'rtmp'} onChange={handleTypeChange} />
            RTMP
          </label>
          <label htmlFor="dash">
            <input type="radio" id="dash" name="type" value="dash" checked={videoType === 'dash'} onChange={handleTypeChange} />
            DASH
          </label>
          <label htmlFor="mp4">
            <input type="radio" id="mp4" name="type" value="mp4" checked={videoType === 'mp4'} onChange={handleTypeChange} />
            MP4
          </label>
        </fieldset>
        <label htmlFor="url">Enter Video URL:</label>
        <input type="text" id="url" name="url" value={url} onChange={handleUrlChange} />
      </form>
      <VideoPlayer key={videoType + url} url={url || getDefaultValue()} type={videoType} />
    </div>
  );
}

export default App;
