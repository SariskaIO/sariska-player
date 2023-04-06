import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ url, type }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Clear the src attribute of the video element before setting a new URL
    videoElement.src = '';

    const player = videojs(videoElement, { /* options */ }, () => {
      console.log('Player is ready');
    });

    let sourceType;

    switch (type) {
      case 'hls':
        sourceType = 'application/x-mpegURL';
        break;
      case 'mp4':
        sourceType = 'video/mp4';
        break;
      case 'flv':
        sourceType = 'video/x-flv';
        break;
      case 'rtmp':
        sourceType = 'rtmp/mp4';
        break;
      case 'dash':
        sourceType = 'application/dash+xml';
        break;
      default:
        sourceType = 'video/mp4';
    }

    player.src({
      src: url,
      type: sourceType,
    });

    playerRef.current = player;

    player.on('play', () => {
      setLoaded(true);
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [url, type]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" playsInline controls />
      {!loaded && (
        <div className="loading-overlay">
          <div className="spinner" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
