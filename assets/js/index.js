fetch('https://api.kirp.al/now-playing').then((res) => {
  return res.json();
}).then((data) => {
  if (data.response && data.response.length > 0) {
    let item = document.getElementById('spotify-now-playing');
    item.classList.remove("loading-dots");
    item.innerHTML = data.status
      + '<a href="' + data.songUrl
      + '" target="_BLANK" rel="noopener" style="color: #1DB954;">'
      + data.songName + '</a>' + ' by ' + data.artistName;
  }
}).catch((err) => {
  console.log(err);
});
