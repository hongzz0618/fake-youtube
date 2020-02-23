import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default function BigVideo(props) {
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div style={{ height: 630 }}>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title={props.video.snippet.channelTitle}
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
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
