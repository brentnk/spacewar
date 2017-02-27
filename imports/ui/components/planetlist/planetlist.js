import {Planets} from '/imports/api/planets/planets.js';
import {Meteor} from 'meteor/meteor';
import './planetlist.html';

Template.planetlist.onCreated(function () {
  Meteor.subscribe('planets.all');
  Meteor.subscribe('planets.mine');
});

Template.planetlist.helpers({
  planets() {
    return Planets.find({});
  },
  my_planets() {
    return Planets.find({});
  },
});

