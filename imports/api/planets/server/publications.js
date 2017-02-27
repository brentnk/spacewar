// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Planets } from '../planets.js';

Meteor.publish('planets.all', function () {
  return Planets.find(
    {},
    {
      fields : {
        name: 1,
        ownerId: 1,
        position: 1,
        galaxyId: 1
      }
    }
  );
});

Meteor.publish('planets.mine', function(planetId) {
  return Planets.find({
    'ownerId': this.userId
  });
});