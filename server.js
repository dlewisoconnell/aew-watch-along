const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCMpF4zF89ztV2dDffyRkYjGn1C9jhf6uo'
});

app.get('/thumbnails', async (req, res) => {
  try {
    const response = await youtube.search.list({
      part: 'snippet',
      q: 'aew dynamite',
      type: 'video',
      channelId: 'UCFN4JkGP_bVhAdBsoV9xftA',
      maxResults: 5,
    });

    const thumbnails = response.data.items.map((item) => {
      const videoId = item.id.videoId;
      const thumbnailUrl = item.snippet.thumbnails.default.url;
      return `<img class="thumbnail" src="${thumbnailUrl}" data-video-id="${videoId}" />`;
    });

    const html = `
      <div class="thumbnails-container">
        ${thumbnails.join('')}
      </div>
    `;

    res.send(html);
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
