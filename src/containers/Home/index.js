
import React, { useState } from "react";
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Input, Divider } from "@mui/material";
import VideoPlayer from '../../VideoPlayer';
import { colors } from "../../assets/styles/_color";
import { SYNE } from "../../constants";
import ExtendedContainer from "../../components/ExtendedContainer";
import CentralContainer from "../../components/CentralContainer";
import "../../assets/styles/_home.css";

const Home = () => {
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
        <ExtendedContainer padding={'2.5rem 7.5rem'}>
            <CentralContainer>
                <Box sx={{ padding: "20px" }}>
                    <Typography
                        component="h1"
                        sx={theme => ({
                            color: colors.primary,
                            fontSize: "32px",
                            fontFamily: SYNE,
                            [theme.breakpoints.between(900, 1355)]: {
                                fontSize: '24px'
                            },
                            [theme.breakpoints.down('md')]: {
                                fontSize: '18px'
                            }
                        })}
                    >
                        <strong>
                            Test Your Live Streams with Sariska Player
                        </strong>
                    </Typography>
                </Box>
                <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <Divider />
                </div>
                <VideoPlayer key={videoType + url} url={url || getDefaultValue()} type={videoType} />
                <Box
                    border={1}
                    borderRadius={2}
                    width="100%"
                    marginTop={"20px"}
                    p={2}
                    boxSizing="border-box"
                >
                    <Typography>Stream type</Typography>
                    <RadioGroup
                        row
                        aria-label="stream-type"
                        name="stream-type"
                        value={videoType}
                        onChange={handleTypeChange}
                    >
                        <FormControlLabel
                            value="hls"
                            control={<Radio color="primary" />}
                            label="HLS"
                        />
                        <FormControlLabel
                            value="flv"
                            control={<Radio color="primary" />}
                            label="FLV"
                        />
                        <FormControlLabel
                            value="rtmp"
                            control={<Radio color="primary" />}
                            label="RTMP"
                        />
                        <FormControlLabel
                            value="dash"
                            control={<Radio color="primary" />}
                            label="DASH"
                        />
                        <FormControlLabel
                            value="mp4"
                            control={<Radio color="primary" />}
                            label="MP4"
                        />
                    </RadioGroup>
                    <Input
                        id="manifest-input"
                        name="manifest-input"
                        label="Stream URI"
                        variant="outlined"
                        placeholder="Stream URI"
                        value={url}
                        onChange={handleUrlChange}
                    />
                    <div id="stream-error" class="error"></div>

                </Box>
            </CentralContainer>
        </ExtendedContainer>
    );
};

export default Home;
