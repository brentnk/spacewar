import { Meteor } from 'meteor/meteor';
import { BuildQueue } from '../buildqueue.js';

Meteor.publish('buildqueue.all', function () {
  return BuildQueue.find(
    {ownerId: this.userId}
  );
});