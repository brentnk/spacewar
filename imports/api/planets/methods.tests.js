// Tests for Galaxies methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Planets } from './planets.js';
import './methods.js';

if (Meteor.isServer) {
  describe('Planets methods', function () {
    beforeEach(function () {
      Planets.remove({});
    });

    it('can add a new planet', function () {
      const addPlanet = Meteor.server.method_handlers['planets.insert'];

      addPlanet.apply({}, ['Planet 1', 150, 1, 1, -1]);

      assert.equal(Planets.find().count(), 1);
    });
  });
}
