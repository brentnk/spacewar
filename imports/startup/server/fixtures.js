// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Galaxies } from '../../api/galaxies/galaxies.js';
import { Planets } from '../../api/planets/planets.js';

var makeGenericPlanet = function(planetNumber) {
  return {
    name: "Planet " + planetNumber,
    fields: 150,
    owner: -1, // System owns the planet / no one owns the planet
  }
}

Meteor.startup(() => {

  if (Galaxies.find().count() === 0) {
    const data = [
      {
        name: "Galaxy 1",
      },
      {
        name: "Galaxy 3",
      },
      {
        name: "Galaxy 3",
      },
    ]

    data.forEach(galaxy => Galaxies.insert(galaxy));
  }

  if (Planets.find().count() === 0) {
    const data = [
        {
          fields: 150,
            name: "Planet 1",
            ownerId: -1,
            position: 1,
            galaxyId: 1,
            crystal: 50,
            metal: 50,
            deuterium: 50,
            power: 50,
        },
        {
          fields: 150,
            name: "Planet 2",
            ownerId: -1,
            position: 2,
            galaxyId: 1,
            crystal: 50,
            metal: 50,
            deuterium: 50,
            power: 50,
        },
        {
          fields: 150,
            name: "Planet 3",
            ownerId: -1,
            position: 3,
            galaxyId: 1,
            crystal: 50,
            metal: 50,
            deuterium: 50,
            power: 50,
        },
        {
          fields: 150,
            name: "Planet 4",
            ownerId: -1,
            position: 4,
            galaxyId: 1,
            crystal: 50,
            metal: 50,
            deuterium: 50,
            power: 50,
        },
    ]

      data.forEach(planet => Planets.insert(planet));
  }
});
