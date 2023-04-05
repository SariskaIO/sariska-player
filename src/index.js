import React from 'react';
import { render } from 'react-dom';
import Videojs from './video.js';

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  
  // HLS

  // sources: [
  //   {
  //     src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
  //     type: 'application/x-mpegURL',
  //   },
  // ],

  //RTMP
  
  // sources: [
  //   {
  //     src: 'rtmp://fms.12E5.edgecastcdn.net/0012E5/mp4:videos/8Juv1MVa-485.mp4',
  //     type: 'rtmp/mp4',
  //   },
  // ],

  // DASH
  sources: [
    {
      src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      type: 'application/dash+xml',
    },
  ],
};

const App = () =>
  <div>
    <Videojs {...videoJsOptions} />
  </div>;

render(<App />, document.getElementById('root'));