const renderfilms = require('./renderfilms')

const getFilms = () => {
    $.get(`https://students-api.up.railway.app/movies`, () => data.map(renderFilms)).fail(() => alert(`Error`))
}
module.exports = getFilms