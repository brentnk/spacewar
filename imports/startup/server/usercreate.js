
import { Planets } from '../../api/planets/planets.js';
import { Random } from  'meteor/random';

Accounts.onCreateUser(function(options, user) {
    // find empty planet for the player
    console.log("New user being created...");
    let planetCandidates = Planets.find({'ownerId': -1}).fetch();
    console.log(`  ${planetCandidates.length} planet candidates found`);

    if (planetCandidates.length === 0) {
        console.log('  [ERROR] Aborting user creation: no planets available');
        throw "No planets available";
    }

    let whichPlanet = Random.choice(planetCandidates);

    console.log(`[INFO] '${whichPlanet.name}' selected for playerId ${user._id}`);

    Planets.update(whichPlanet._id,{$set: {ownerId:user._id}});

    return user;
});