const express = require('express');
const PORT = process.env.PORT || 3000;
const config = require('./knexfile.js');
const knex = require('knex')(config.development)
const app = express();

app.get('/', (req, res) => {
  // return knex.select('artist_id', 'album_id', 'track_title').from('tracks')

  var promise = musicQuery();

  promise.then(function(result) {
    res.send(JSON.stringify(result));
  });


});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


function musicQuery () {
  return knex.select('artist_id', 'album_id', 'track_title').from('tracks')

  var music = knex.raw('SELECT artist, title, track_title AS track FROM tracks JOIN artist ON tracks.artist_id = artist.id JOIN album ON tracks.album_id = album.id')
  
}