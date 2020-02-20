import React from 'react';

import youtube from "./api_youtube/youtube";

async function testGet() {
  let data = await youtube.get('search', {
    params: {
      part: "snippet",
      maxResults: 10,
      key: "AIzaSyCQrRehtFg5FhO6Hq6I-yJGKmfhi20enww",
      q: "love",
    }

  });
  console.log(data);
}

function App() {

  testGet();
  return (
    <div className="App">
      youtube
    </div>
  );
}

export default App;
