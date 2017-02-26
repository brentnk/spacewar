// Tests for Galaxies methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Galaxies } from './galaxies.js';
import './methods.js';

if (Meteor.isServer) {
  describe('Galaxies methods', function () {
    beforeEach(function () {
      Galaxies.remove({});
    });

    it('can add a new galaxy', function () {
      const addGalaxy = Meteor.server.method_handlers['galaxies.insert'];

      addGalaxy.apply({}, ['Galaxy 1', []]);

      assert.equal(Galaxies.find().count(), 1);
    });
  });
}
