// All galaxies-related publications

import { Meteor } from 'meteor/meteor';
import { Galaxies } from '../galaxies.js';

Meteor.publish('galaxies.all', function () {
  return Galaxies.find();
});
