module.exports.loop = function () {
  memoryClear.creeps();
  creepSpawner.spawn();
  assignCreeps.run();
}
