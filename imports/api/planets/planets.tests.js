// Tests for the behavior of the Galaxies collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Planets } from './planets.js';

if (Meteor.isServer) {
  describe('planets collection', function () {
    it('insert correctly', function () {
      const planetId = Planets.insert({
        id: 1,
        name: "Planet 1",
        fields: 150,
        position: 1,
        galaxyId: 1,
        owner: -1, // -1 system owner
      });
      const added = Planets.find({ _id: planetId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'planets');
      assert.equal(count, 1);
    });
  });
}
