const fetch = require('node-fetch');

// Returns all Star Wars characters, or a single actor if the id is given
async function getStarWarsCharacters(actorId) {
  let actors = []

  if (actorId) {
    try {
      const resp = await fetch(`https://swapi.dev/api/people/${actorId}/`)
      console.log({ resp })
      if (resp.ok) {
        actors = await resp.json()
        console.log({ actors })
      }
      return actors
    } catch (err) {
      return Promise.reject('Failed to fetch data!');
    }
  } else {
    try {
      const resp = await fetch('https://swapi.dev/api/people')
      if (resp.ok) {
        actors = await resp.json()
      }
    } catch (err) {
      return Promise.reject('Failed to fetch data!');
    }

    return actors
  }
}

getStarWarsCharacters(1).then(data => {
  actors = data
  console.log(actors)
})

