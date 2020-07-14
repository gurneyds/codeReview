const fetch = require('node-fetch');

function getData(id) {
  let list = []

  if (!id) {
    return 'No id'
  }

  fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then((data) => {
      console.log('list contains:', { data })
    })
    .catch(() => {
      actors = 'Error happend'
    })

  return actors
}

const list = getData(1)
console.log(actors)