var playlist = {
  Beatles: "Twist and Shout"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlayist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
