const express = require('express');
const {google} = require('googleapis');

const app = express();

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
      maxResults: 10
    });
    const videos = response.data.items.map((item) => {
      return item.snippet.title;
    });
    res.send(`
      <html>
        <head>
          <title>AEW Dynamite Videos</title>
        </head>
        <body>
          <ul>
            ${videos.map((video) => {
              return `<li>${video}</li>`;
            }).join('')}
          </ul>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving videos from YouTube API.');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});