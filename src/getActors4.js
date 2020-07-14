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

// Get a Star Wars character by id
async function getStarWarsCharacter(actorId) {
  if (!actorId) {
    throw new Error('Missing actorId')
  }

  if (actorId) {
    try {
      const resp = await fetch(`https://swapi.dev/api/people/${actorId}/`)
      let actor
      if (resp.ok) {
        actor = await resp.json()
      } else {
        throw new Error(`Could not fetch actor with id=${actorId}`)
      }
      return actor
    } catch (err) {
      return Promise.reject('Failed to fetch data!');
    }
  }
}

getStarWarsCharacters().then(actors => {
  console.log(actors)
})

getStarWarsCharacter(1).then(actor => {
  console.log(actor)
})
