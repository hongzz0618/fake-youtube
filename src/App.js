import React, { Component } from 'react';

import youtube from "./api_youtube/youtube";
// import SearchBar from "./Component/SearchBar";
import Videos from "./Component/Videos";

import { Grid, Container } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [], selectedVideo: null

    }
  }

  componentDidMount() {
    this.GetYoutubeInfo();
  }

  async GetYoutubeInfo() {
    let getData = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 50,
        key: "AIzaSyCQrRehtFg5FhO6Hq6I-yJGKmfhi20enww",
        q: "star",
      }

    });
    console.log(getData)
    this.setState({ videos: getData.data.items })

  }

  render() {
    const { videos } = this.state
    return (
      <>
        <Container maxWidth="xl">
          {/* <SearchBar /> */}
          <Grid container spacing={4}>
            {videos.map((video, index) => (
              <Videos key={index} video={video} />
            ))}
          </Grid>
        </Container>
      </>
    )
  }
}
export default App;
