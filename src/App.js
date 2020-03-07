import React, { Component } from 'react';

import youtube from "./api_youtube/youtube";

import Navbar from "./Component/Navbar";
import SearchBar from "./Component/SearchBar";
import MainVideos from "./Component/mainVideos";
import SearchVideos from "./Component/SearchVideos";
import ViewVideo from "./Component/ViewVideo";

import TocIcon from '@material-ui/icons/Toc';
import { Grid, Container, Typography } from '@material-ui/core';
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const override = css`
  display: flex;
  margin: 120px auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [], selectedVideo: null, timesSearched: 0, loading: true, timeClicked: 0

    }
    this.GetYoutubeInfo = this.GetYoutubeInfo.bind(this)
  }

  componentDidMount() {
    this.GetYoutubeInfo("coronavirus");
  }

  async GetYoutubeInfo(searchTerm) {
    let getData = await youtube.get('search', {
      params: {
        part: "snippet",
        key: "AIzaSyBbI2e7ZlFTiYsiOi1WmKidfU2g9O3PaRY",
        maxResults: 30,
        q: searchTerm,
      }

    });
    this.setState({ videos: getData.data.items, timesSearched: this.state.timesSearched + 1, selectedVideo: getData.data.items[0], timeClicked: 0 })
  }

  ClickSearchInfo = (data) => {
    this.setState({ selectedVideo: data, timeClicked: this.state.timeClicked + 1 })
    window.scrollTo(0, 0);
  }
  render() {
    const { videos, timesSearched, selectedVideo, timeClicked } = this.state
    let noData = videos.length < 1;
    let noSearched = timesSearched < 2;
    let noClicked = timeClicked < 1;
    let tituloPrincipal = "Recomendados";
    let tituloBuscado = "FILTRAR";

    return (
      <>

        <Navbar />
        <Grid container className="searchBar">
          <SearchBar Submit={this.GetYoutubeInfo} />
        </Grid>

        <Container  className="mainContainer">

          {noClicked ? noSearched ? <Typography variant="h5" component="h2" style={{ marginBottom: 20 }}>
            <strong>{tituloPrincipal}</strong></Typography>
            : <div style={{ marginBottom: 20, display: "inline-flex", color: "gray" }}>
              <TocIcon style={{ paddingRight: 5, paddingTop: 4 }} />
              <Typography variant="h6" component="h2"><strong>{tituloBuscado}</strong></Typography></div> : null}

          {noData ? <ClipLoader css={override} size={150} color={"red"} loading={this.state.loading} /> :
            !noClicked ? <ViewVideo video={selectedVideo} videos={videos} onVideoSelect={this.ClickSearchInfo} /> :
              < Grid container spacing={4}>
                {noSearched ? videos.map((video, index) => (
                  <MainVideos key={index} video={video} onVideoSelect={this.ClickSearchInfo} />
                )) : videos.map((video, index) => (
                  <SearchVideos key={index} video={video} onVideoSelect={this.ClickSearchInfo} />
                ))}
              </Grid>}

        </Container>

      </>
    )
  }
}
export default App;
