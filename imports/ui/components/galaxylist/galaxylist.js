import { Galaxies } from '/imports/api/galaxies/galaxies.js';
import { Meteor } from 'meteor/meteor';
import './galaxylist.html';

Template.galaxylist.onCreated(function () {
  Meteor.subscribe('galaxies.all');
});

Template.galaxylist.helpers({
  galaxies() {
    return Galaxies.find({});
  },
});

