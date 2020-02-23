import React from "react";

import { Grid } from "@material-ui/core";
import BigVideo from "./BigVideo";
import VideoList from "./VideoList";

export default function ViewVideo(props) {

    return (
        <Grid container spacing={4}>
            <Grid item xs={8}>
                <BigVideo video={props.video} />
            </Grid>
            <Grid item xs={4}>
                <VideoList videos={props.videos} onVideoSelect={props.setSelectedVideo} />
            </Grid>

        </Grid>
    );
}
