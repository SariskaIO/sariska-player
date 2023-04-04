import React from 'react';
import { render } from 'react-dom';
import Videojs from './video.js';

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
      type: 'application/x-mpegURL',
    },
  ],
};

const App = () =>
  <div>
    <Videojs {...videoJsOptions} />
  </div>;

render(<App />, document.getElementById('root'));