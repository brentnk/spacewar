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
  'planets.claimByPlayer'(id) {
    check(id, String)

    let planet = Planets.findOne({_id: id});

    if(!!planet === false) {
      throw "Planet not found";
    }

    if(planet.ownerId !== -1) {
      throw "Planet owned by someone!";
    }

    return Planets.update({_id: id}, {$set: {ownerId: this.userId}});
  },
});
