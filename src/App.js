import React, { Component } from 'react';

import youtube from "./api_youtube/youtube";

import SearchBar from "./Component/SearchBar";
import MainVideos from "./Component/mainVideos";

import { Grid, Container, Typography } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [], selectedVideo: null

    }
    this.GetYoutubeInfo = this.GetYoutubeInfo.bind(this)
  }

  componentDidMount() {
    this.GetYoutubeInfo("react");
  }

  async GetYoutubeInfo(searchTerm) {
    let getData = await youtube.get('search', {
      params: {
        part: "snippet",
        key: "AIzaSyBa7tw3jxWIvVzslzLcRrOd2jIAAGfOlkw",
        q: searchTerm,
      }

    });
    this.setState({ videos: getData.data.items })
  }

  render() {
    const { videos } = this.state
    return (
      <>
        <Grid container justify="center" alignItems="center">
          <SearchBar Submit={this.GetYoutubeInfo} />
        </Grid>
        <Container maxWidth="xl" className="MainbackgroundImage">
          <Typography variant="h5" component="h2" style={{ marginTop: 20, paddingTop: 30, marginBottom: 20 }}><strong>Recomendados</strong></Typography>
          <Grid container spacing={4}>
            {videos.map((video, index) => (
              <MainVideos key={index} video={video} />
            ))}
          </Grid>
        </Container>
      </>
    )
  }
}
export default App;
