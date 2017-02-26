// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Planets } from '../planets.js';

Meteor.publish('planets.all', function () {
  return Planets.find();
});
