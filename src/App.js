import React, { Component } from 'react';

import youtube from "./api_youtube/youtube";

import SearchBar from "./Component/SearchBar";
import MainVideos from "./Component/mainVideos";
import SearchVideos from "./Component/SearchVideos";
import TocIcon from '@material-ui/icons/Toc';

import { Grid, Container, Typography } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [], selectedVideo: null, timesSearched: 0

    }
    this.GetYoutubeInfo = this.GetYoutubeInfo.bind(this)
  }

  componentDidMount() {
    this.GetYoutubeInfo();
  }

  async GetYoutubeInfo(searchTerm) {
    let getData = await youtube.get('search', {
      params: {
        part: "snippet",
        key: "AIzaSyCg7BfwhJLk-wd_NnUUbYOSTAC0kDhszIM",
        maxResults: 20,
        q: searchTerm,
      }

    });
    this.setState({ videos: getData.data.items, timesSearched: this.state.timesSearched + 1 })
  }

  render() {
    const { videos, timesSearched } = this.state
    return (
      <>
        <Grid container justify="center" alignItems="center" style={{ marginBottom: 20, position: "fixed", zIndex: 100, width: "100%", top: 0, backgroundColor: "white", paddingBottom: 20 }}>
          <SearchBar Submit={this.GetYoutubeInfo} />
        </Grid>
        <Container maxWidth="xl">
          {timesSearched < 2 ? <Typography variant="h5" component="h2" style={{ marginTop: 80, paddingTop: 30, marginBottom: 20 }}><strong>Recomendados</strong></Typography>
            : <div style={{ marginTop: 100, spaddingTop: 30, marginBottom: 20, display: "inline-flex", color: "gray" }}>
              <TocIcon style={{ paddingRight: 5, paddingTop: 4 }} />
              <Typography variant="h6" component="h2"><strong>FILTRAR</strong></Typography></div>}
          < Grid container spacing={4}>
            {timesSearched < 2 ? videos.map((video, index) => (
              <MainVideos key={index} video={video} />
            )) : videos.map((video, index) => (
              <SearchVideos key={index} video={video} />
            ))}
          </Grid>
        </Container>
      </>
    )
  }
}
export default App;
