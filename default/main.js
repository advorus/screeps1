var memoryClear = require('memoryClear');
var creepSpawner = require('creepSpawner');
var assignCreeps = require('assignCreeps');

module.exports.loop = function () {
  memoryClear.creeps();
  creepSpawner.spawn();
  assignCreeps.run();
}
