fetch('https://api.kirp.al/now-playing').then((res) => {
  return res.json();
}).then((data) => {
  if (data.response && data.response.length > 0) {
    let item = document.getElementById('spotify-now-playing');
    item.classList.remove("loading-dots");
    item.innerHTML = data.status
      + '<a href="' + data.songUrl
      + '" target="_BLANK" rel="noopener" style="color: #15843C;">'
      + data.songName + '</a>' + ' by ' + data.artistName
      + ' <a href="https://joshspicer.com/spotify-now-playing"'
      + ' target="_BLANK" rel="noopener" style="color: #15843C; text-decoration: none;">*</a>';
  }
}).catch((err) => {
  console.log(err);
});
