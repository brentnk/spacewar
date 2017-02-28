import {Planets} from '/imports/api/planets/planets.js';
import {Meteor} from 'meteor/meteor';
import './planetlist.html';

Template.planetlist.onCreated(function () {
  Meteor.subscribe('planets.all');
  Meteor.subscribe('planets.mine');
});

Template.planetlist.onRendered(function() {
  Holder.run();
});

Template.planetlist.helpers({
  planets() {
    return Planets.find({});
  },
  my_planets() {
    return Planets.find({});
  },
  amOwner(planetOwner) {
    return Meteor.userId() === planetOwner;
  },
});

Template.planetlist.events({
  'click .planetclaim'(e) {
    Meteor.call('planets.claimByPlayer',e.currentTarget.attributes["planetid"].value);
  }
});