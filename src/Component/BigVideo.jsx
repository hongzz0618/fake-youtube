import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default function BigVideo(props) {
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div >
      <Paper elevation={6} className="videoIframe">
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title={props.video.snippet.channelTitle}
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} className="paperIframe">
        <Typography variant="h5" className="textIframe">
          {props.video.snippet.title} - {props.video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {props.video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{props.video.snippet.description}</Typography>
      </Paper>
    </div>
  );
}
