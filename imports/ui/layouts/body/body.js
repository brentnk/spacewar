import './body.html';
import { Meteor } from 'meteor/meteor';

Template.App_body.onRendered(function() {
  Holder.run();
});