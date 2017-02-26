import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.helpers({
  links: [
      {name: "building1", level: 0},
      {name: "building5", level: 0},
      {name: "building4", level: 0},
      {name: "building2", level: 0},
      {name: "building3", level: 0},
    ]
});
