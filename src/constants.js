export const COMPANY_REGISTERED_NAME = 'Baselayer Technologies Pvt Ltd.';
export const SYNE = `'Syne', sans-serif`;
export const DM_SANS = `'DM Sans', sans-serif`;
export const OUTFIT = `'Outfit', sans-serif`;
export const ALMARAI = `'Almarai', sans-serif`;
export const AKZIDENZ = `'Akzidenz-Grotesk', sans-serif`
export const CENTER = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const SPACE_BETWEEN_COLUMN = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export const SESSIONS_PER_MONTH = 5000;

export const LIVE_STREAMING_STREAM = 1;

export const MAX_CONFERENCE_UPSTREAM_USERS = 10000;
export const MAX_CONFERENCE_DOWNSTREAM_USERS = 10000;
export const MAX_CONFERENCE_VISIBLE_VIDEO_STREAMS = 20;

export const MAX_LIVESTREAMING_UPSTREAM_USERS = 50;
export const MAX_LIVESTREAMING_DOWNSTREAM_USERS = 30000;

export const MAX_MINUTES = 1440;

export const VIDEO_BITRATE_QUALITY = {
  "180p": "120kbps",
  "360p": "300kbps",
  "540p": "600kbps",
  "720p": "2.00Mbps",
  "1080p": "3.00Mbps",
};

export const VIDEO_BITRATE_QUALITY_LIST = [
  { label: "180P", value: "180p" },
  { label: "360P", value: "360p" },
  { label: "540P", value: "540p" },
  { label: "720P", value: "720p" },
  { label: "1080P", value: "1080p" }
];

export const AUDIO_BITRATE_QUALITY = {
  "normal": "20kbps",
  "high": "50kbps",
};

export const AUDIO_BITRATE_QUALITY_LIST = [
  { label: "Normal", value: "20kbps" },
  { label: "High Quality", value: "50kbps" }
];

export const AUDIO_BITRATE = "20kbps";

export const SESSION_MINUTES_MIN_MAX = {
  session: { min: 1, max: 5000},
  minutes: { min: 1, max: MAX_MINUTES }
};

export const CONFERENCE_UPSTREAM_MIN_MAX = {
  videoUsers: { min: 1, max: MAX_CONFERENCE_UPSTREAM_USERS },
  videoBitrate: { min: "128kbps", max: "10.00Mpbs" },
  //videoQuality: { min: "180p", max: "1080p" },
  audioMinutes: { min: 1, max: MAX_MINUTES },
  audioUsers: { min: 1, max: MAX_CONFERENCE_UPSTREAM_USERS },
  audioBitrate: { min: "8kbps", max: "100kbps" },
};
export const CONFERENCE_DOWNSTREAM_MIN_MAX = {
  videoMinutes: { min: 1, max: SESSION_MINUTES_MIN_MAX.minutes.max },
  videoUsers: { min: 1, max: MAX_CONFERENCE_DOWNSTREAM_USERS },
  videoStream: { min: 0, max: CONFERENCE_UPSTREAM_MIN_MAX.videoUsers },
  //videoQuality: { min: "180p", max: "1080p" },
  audioMinutes: { min: 1, max: CONFERENCE_UPSTREAM_MIN_MAX.audioMinutes.max },
  audioUsers: { min: 1, max: MAX_CONFERENCE_DOWNSTREAM_USERS },
  audioBitrate: { min: "20kbps", max: "20kbps" },
};
export const LIVESTREAMING_UPSTREAM_MIN_MAX = {
  videoUsers: { min: 1, max: MAX_LIVESTREAMING_UPSTREAM_USERS },
  videoBitrate: { min: "128kbps", max: "10.00Mpbs" },
  //videoQuality: { min: "180p", max: "1080p" },
  audioMinutes: { min: 1, max: MAX_MINUTES },
  audioUsers: { min: 1, max: MAX_LIVESTREAMING_UPSTREAM_USERS },
  audioBitrate: { min: "8kbps", max: "100kbps" },
};
export const LIVESTREAMING_DOWNSTREAM_MIN_MAX = {
  videoMinutes: { min: 1, max: SESSION_MINUTES_MIN_MAX.minutes.max },
  videoUsers: { min: 1, max: MAX_LIVESTREAMING_DOWNSTREAM_USERS },
  videoStream: { min: 0, max: LIVESTREAMING_UPSTREAM_MIN_MAX.videoUsers.max },
  //videoQuality: { min: "180p", max: "1080p" },
  audioMinutes: { min: 1, max: LIVESTREAMING_UPSTREAM_MIN_MAX.audioMinutes.max },
  audioUsers: { min: 1, max: MAX_LIVESTREAMING_DOWNSTREAM_USERS },
  audioBitrate: { min: "20kbps", max: "20kbps" },
};
export const TRANSCODING_MIN_MAX = {
  recordedMinutes: { min: 0, max: MAX_MINUTES },
  livestreamedMinutes: { min: 1, max: MAX_MINUTES },
};

export const BANDWIDTH_PRICING = [
  {ppGB : 0.18, discount: 0, threshold: 1000}, 
  {ppGB : 0.16, discount: 11.11, threshold: 10000},
  {ppGB : 0.14, discount: 22.2, threshold: 50000},
  {ppGB : 0.12, discount: 33, threshold: 100000}
]
export const TRANSCODING_PRICING = [
  {type: 'Audio-Only', pptMinute: 0.005},
  {type: 'Video', pptMinute: 0.02}
]

export const COLLY_CHROME_EXTENSION = 'https://chrome.google.com/webstore/detail/collaborate/pagohfdoghkpepfonckgjdeffdigojpc';

export const COLLABORATE_SDK_DOCS = 'https://docs.sariska.io/co-browsing/overview';

export const PRODUCT_HUNT = {
  COLLABORATE: {
    HREF: 'https://www.producthunt.com/posts/collaborate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-collaborate',
    IMAGE: 'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=381676&theme=light'
  }
}

export const ADD_ONS = {
  realTimeMessaging: `$10`,
  coBrowsing: `$15`,
  analytics: `Free`,
  unit: `per 1,000 MAU`
}