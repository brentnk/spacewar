// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Galaxies } from '../../api/galaxies/galaxies.js';

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
        planets: [
          makeGenericPlanet(1),
          makeGenericPlanet(2),
        ]
      },
      {
        name: "Galaxy 3",
        planets: [
          makeGenericPlanet(1),
          makeGenericPlanet(2),
        ]
      },
      {
        name: "Galaxy 3",
        planets: [
          makeGenericPlanet(1),
          makeGenericPlanet(2),
        ]
      },
    ]

    data.forEach(galaxy => Galaxies.insert(galaxy));
  }
});
