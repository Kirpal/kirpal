fetch('https://api.kirp.al/now-playing').then((res) => {
  return res.json();
}).then((data) => {
  if (data.response && data.response.length > 0) {
    let item = document.getElementById('spotify-now-playing');
    item.classList.remove("loading-dots");
    item.innerHTML = data.status
      + '<a href="' + data.songUrl
      + '" target="_BLANK" rel="noopener" style="color: var(--now-spotify-color);">'
      + data.songName + '</a>' + ' by ' + data.artistName
      + ' <a href="https://joshspicer.com/spotify-now-playing"'
      + ' target="_BLANK" rel="noopener" style="color: var(--now-spotify-color); text-decoration: none;">*</a>';
  }
}).catch((err) => {
  console.log(err);
});
