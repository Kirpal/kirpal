fetch('https://kirpal.npkn.net/now/').then((res) => {
  return res.json();
}).then((data) => {
  for (let entry of Object.entries(data)) {
    let item = document.getElementById(entry[0]);
    item.classList.remove("loading-dots");
    item.innerHTML = entry[1];
  }
}).catch((err) => {
  console.log(err);
});
