import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default function VideoList(props) {
  const listOfVideos = props.videos.map(video => (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => props.onVideoSelect(video)} >
        <img style={{ marginRight: "20px" }} alt={video.snippet.channelTitle} src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {listOfVideos}
    </Grid>
  );
}
