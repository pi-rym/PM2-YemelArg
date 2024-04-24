(() => {
  var e = {
      665: (e, t, r) => {
        const n = r(901);
        e.exports = () => {
          $.get("https://students-api.up.railway.app/movies", (e) =>
            e.map(n)
          ).fail(() => alert("Error"));
        };
      },
      901: (e) => {
        const t = document.getElementById("films");
        e.exports = (e) => {
          console.log("entro en render film");
          const r = document.createElement("movie"),
            n = document.createElement("divMovie");
          r.classList.add("movie"),
            n.classList.add("divMovie"),
            (r.innerHTML = `<img src="${e.poster}"alt=${e.title}>`),
            (n.innerHTML = `\n   \n    <h3>${e.title} - (${e.year})</h3>\n    <p><strong>Director:</strong> ${e.director}</p>\n    <p><strong>Duracion:</strong> ${e.duration}</p>\n    <p><strong>Genero:</strong> ${e.genre}</p>\n    <p><strong>Rate:</strong> ${e.rate}</p>\n    `),
            r.appendChild(n),
            t.appendChild(r);
        };
      },
    },
    t = {};
  !(function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var s = (t[n] = { exports: {} });
    return e[n](s, s.exports, r), s.exports;
  })(665)();
})();
