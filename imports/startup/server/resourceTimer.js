/**
 * Created by Brent on 2/27/2017.
 */
import { Planets } from '../../api/planets/planets.js';

Meteor.setInterval(function(){
  Planets.update({ownerId: {$ne:-1}}, {$inc: {metal: 5, crystal: 3, deuterium: 1}});
}, 5000);