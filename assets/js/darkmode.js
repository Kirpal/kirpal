document.getElementById("theme-switch").onclick = (e) => {
  let isDark =
    document.body.classList.contains("darkmode") ||
    (!document.body.classList.contains("lightmode") &&
      window.matchMedia("screen and (prefers-color-scheme: dark)").matches);

  document.body.classList.remove(isDark ? "darkmode" : "lightmode");
  document.body.classList.add(isDark ? "lightmode" : "darkmode");
  window.localStorage.setItem("prefers-color-scheme", isDark ? "light" : "dark");
};
