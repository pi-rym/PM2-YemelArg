(() => {
  var t = {
      665: (t, e, r) => {
        const n = r(901);
        t.exports = () => {
          $.get("https://students-api.up.railway.app/movies", (t) =>
            t.map(n)
          ).fail(() => alert("Error"));
        };
      },
      901: (t) => {
        const e = document.getElementById("films");
        t.exports = (t) => {
          const r = document.createElement("movie"),
            n = document.createElement("divMovie");
          r.classList.add("movie"),
            n.classList.add("divMovie"),
            (r.innerHTML = `<img src="${t.poster}"alt=${t.title}>`),
            (n.innerHTML = `\n   \n    <h3>${t.title} - (${t.year})</h3>\n    <p><strong>Director:</strong> ${t.director}</p>\n    <p><strong>Duracion:</strong> ${t.duration}</p>\n    <p><strong>Genero:</strong> ${t.genre}</p>\n    <p><strong>Rate:</strong> ${t.rate}</p>\n    `),
            r.appendChild(n),
            e.appendChild(r);
        };
      },
    },
    e = {};
  !(function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var s = (e[n] = { exports: {} });
    return t[n](s, s.exports, r), s.exports;
  })(665)();
})();
