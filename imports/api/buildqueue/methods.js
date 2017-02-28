/**
 * Created by Brent on 2/28/2017.
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { BuildQueue } from './buildqueue.js';

Meteor.methods({
  'buildqueue.insert'(action, secFromNow) {
    check(action, Object);
    check(secFromNow, Number);

    return BuildQueue.insert({
      action,
      ownerId: this.userId,
      createdAt: new Date(),
      triggerAt: moment().add(120, 's').toDate(),
    });
  },
});