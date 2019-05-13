var playlist = {
  beatles: "Twist and Shout"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = songTitle;
  return playlist;
}

function removeFromPlayist(playist, artistName){
  delete playlist.artistName;
  return playlist;
}
