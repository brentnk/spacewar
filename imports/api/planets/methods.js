// Methods related to galaxies

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Planets } from './planets.js';

Meteor.methods({
  'planets.insert'(name, fields, position, galaxyId, owner) {
    check(name, String);
    check(fields, Number);
    check(position, Number);
    check(galaxyId, Number);
    check(owner, Number);

    return Planets.insert({
      name,
      fields,
      position,
      galaxyId,
      owner,
      createdAt: new Date(),
    });
  },
});
