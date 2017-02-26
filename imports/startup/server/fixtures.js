// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Galaxies } from '../../api/galaxies/galaxies.js';

var makeGenericPlanet = function(planetNumber) {
  return {
    name: "Planet " + planetNumber,
    fields: 150,
    owner: -1, // System owns the planet / no one owns the planet
  }
}

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

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
