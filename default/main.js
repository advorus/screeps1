var roleHarvester = require('role.harvester');

module.exports.loop = function () {

  var harvestCount =
  if()

  for(var name in Game.creeps){
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester'){
      roleHarvester.run(creep);
    }
  }
}
