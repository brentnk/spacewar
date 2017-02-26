// Tests for the galaxies publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import { Galaxies } from '../galaxies.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('galaxies publications', function () {
  beforeEach(function () {
    Galaxies.remove({});
    Galaxies.insert({
      name: "Galaxy 1",
      planets: []
    });
  });

  describe('galaxies.all', function () {
    it('sends all galaxies', function (done) {
      const collector = new PublicationCollector();
      collector.collect('galaxies.all', (collections) => {
        assert.equal(collections.galaxies.length, 1);
        done();
      });
    });
  });
});
