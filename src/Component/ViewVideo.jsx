import React from "react";

import { Grid } from "@material-ui/core";
import BigVideo from "./BigVideo";
import VideoList from "./VideoList";

export default function ViewVideo(props) {

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
                <BigVideo video={props.video} />
            </Grid>
            <Grid item xs={12} md={4}>
                <VideoList videos={props.videos} onVideoSelect={props.onVideoSelect} />
            </Grid>

        </Grid>
    );
}
