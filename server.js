const express = require('express');
const {google} = require('googleapis');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCMpF4zF89ztV2dDffyRkYjGn1C9jhf6uo'
});

app.get('/', async (req, res) => {
  try {
    const response = await youtube.search.list({
      part: 'snippet',
      q: 'aew dynamite',
      type: 'video',
      channelId: 'UCFN4JkGP_bVhAdBsoV9xftA', // Official AEW channel ID
      maxResults: 5, // Return 5 most recent videos
    });

    const videos = response.data.items.map((item) => {
      const videoId = item.id.videoId;
      const thumbnailUrl = item.snippet.thumbnails.medium.url;
      return `<a href="https://www.youtube.com/watch?v=${videoId}"><img src="${thumbnailUrl}" /></a>`;
    });

    res.send(videos.join(''));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving videos from YouTube API.');
  }
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});