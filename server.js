const express = require('express');
const PORT = process.env.PORT || 3000;
const knex = require('./knexfile.js');
const app = express();

app.get('/', (req, res) => {
    res.send(musicQuery(res))
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


function musicQuery () {
  var music = knex.raw('SELECT artist, title, track_title AS track FROM tracks JOIN artist ON tracks.artist_id = artist.id JOIN album ON tracks.album_id = album.id')
  return music
}