import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default function VideoList(props) {
  const listOfVideos = props.videos.map(video => (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", cursor: "pointer" }} onClick={() => props.onVideoSelect(video)} >
        <Grid item xs={4} md={5}>
          <img style={{ backgroundSize: "cover", width: "100%", height: "100%" }} alt={video.snippet.channelTitle} src={video.snippet.thumbnails.medium.url} />
        </Grid>
        <Grid item xs={8} md={7}>
          <Typography variant="subtitle2">
            <b>{video.snippet.title}</b>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {listOfVideos}
    </Grid>
  );
}
