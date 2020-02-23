import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Grid, CardMedia, CardActionArea, Card, makeStyles, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    }

}));
export default function MainVideos(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [likeStyle, setLikeStyle] = React.useState("");
    const [shareStyle, setShareStyle] = React.useState("");

    const { video } = props;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleChangeRed = () => {
        setLikeStyle("redLike");
    };
    const handleChangeBlue = () => {
        setShareStyle("blueShare");
    };
    return (
        // className="videoContainer xs-12 sm-6 md-4 lg-3 xl-2" probar
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="videoContainer">
            <CardActionArea >
                <Card>
                    <div onClick={() => props.onVideoSelect(video)} >
                        <CardMedia className={classes.media} image={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        <CardContent style={{ paddingBottom: 0 }}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {video.snippet.channelTitle}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" className={likeStyle} onClick={handleChangeRed}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" className={shareStyle} onClick={handleChangeBlue}>
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="h6" component="h2">
                                {video.snippet.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {video.snippet.publishedAt}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {video.snippet.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </CardActionArea>
        </Grid >
    );
}

MainVideos.propTypes = {
    video: PropTypes.object,
};