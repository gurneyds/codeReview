const fetch = require('node-fetch');

function getData(actorId) {
  let actors = []

  if (!actorId) {
    return 'No actor id'
  }

  fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then((data) => {
      actors = data
      console.log('actors are:', { actors })
    })
    .catch(() => {
      actors = 'Error happend'
    })

  return actors
}

const actors = getData(1)
console.log(actors)