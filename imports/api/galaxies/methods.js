// Methods related to galaxies

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Galaxies } from './galaxies.js';

Meteor.methods({
  'galaxies.insert'(name, planets) {
    check(name, String);
    check(planets, Array);

    return Galaxies.insert({
      name,
      planets,
      createdAt: new Date(),
    });
  },
});
