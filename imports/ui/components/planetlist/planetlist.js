import {Planets} from '/imports/api/planets/planets.js';
import {BuildQueue} from '/imports/api/buildqueue/buildqueue.js';
import {Meteor} from 'meteor/meteor';
import './planetlist.html';

Template.planetlist.onCreated(function () {
  Meteor.subscribe('planets.all');
  Meteor.subscribe('planets.mine');
  Meteor.subscribe('buildqueue.all');
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
  buildqueue(){
    return BuildQueue.find({});
   },
  amOwner(planetOwner) {
    return Meteor.userId() === planetOwner;
  },
  isUpgrading(planetId) {
    let p = BuildQueue.findOne({'action.target':planetId});
    return p;
  },
  getFromNow(time){
    if (!!time === false) {return;}
    return moment(time).fromNow();
  },
});

Template.planetlist.events({
  'click .planetclaim'(e) {
    // Meteor.call('planets.claimByPlayer',e.currentTarget.attributes["planetid"].value);
    Meteor.call(
      'buildqueue.insert',
      { method: 'planets.claimByPlayer', target: e.currentTarget.attributes["planetid"].value},
      0
  );
  }
});