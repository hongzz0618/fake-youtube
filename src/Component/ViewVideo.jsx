import React from "react";

import { Grid } from "@material-ui/core";
import BigVideo from "./BigVideo";

export default function ViewVideo(props) {

    return (
        <Grid container spacing={10}>
            <Grid item xs={8}>
                <BigVideo video={props.video} />
            </Grid>

        </Grid>
    );
}
