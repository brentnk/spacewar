// Tests for the behavior of the Galaxies collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Galaxies } from './galaxies.js';

if (Meteor.isServer) {
  describe('galaxies collection', function () {
    it('insert correctly', function () {
      const galaxyId = Galaxies.insert({
        id: 1,
        name: "Galaxy 1",
        planets: []
      });
      const added = Galaxies.find({ _id: galaxyId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'galaxies');
      assert.equal(count, 1);
    });
  });
}
