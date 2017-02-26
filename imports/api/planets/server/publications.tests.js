// Tests for the planets publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import { Planets } from '../planets.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('planets publications', function () {
  beforeEach(function () {
    Planets.remove({});
    Planets.insert({
      name: "Planet 1",
      fields: 150,
        position: 1,
        galaxyId: 1,
        owner: -1, // -1 system owner
    });
  });

  describe('planets.all', function () {
    it('sends all planets', function (done) {
      const collector = new PublicationCollector();
      collector.collect('planets.all', (collections) => {
        assert.equal(collections.planets.length, 1);
        done();
      });
    });
  });
});
