import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 240,
    },
});

export default function SearchVideos(props) {
    const classes = useStyles();
    const { video } = props;

    return (
        <Grid item xs={12} lg={10}>
            <CardActionArea>
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={video.snippet.thumbnails.medium.url} title={video.snippet.title} />
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h6">
                                {video.snippet.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {video.snippet.publishedAt}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {video.snippet.description}
                            </Typography>
                        </CardContent>
                    </div>

                </Card>
            </CardActionArea>
        </Grid>
    );
}

SearchVideos.propTypes = {
    video: PropTypes.object,
};