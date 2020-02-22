import React, { Component } from 'react';

import youtube from "./api_youtube/youtube";

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
        maxResults: 10,
        key: "AIzaSyCQrRehtFg5FhO6Hq6I-yJGKmfhi20enww",
        q: "react",
      }

    });
    this.setState({ videos: getData.data.items })

  }

  render() {
    const { videos } = this.state
    const listVideos = videos.map((video, index) =>
      <div key={index}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.channelTitle} />
        <span>{video.snippet.title}</span>
      </div>)
    return (
      <>{listVideos}</>
    )
  }
}
export default App;
