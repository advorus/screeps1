var roleHarvester = require('role.harvester');

module.exports.loop = function () {
  for(var i in Memory.creeps){
    if(!Game.creeps[i]){
      delete Memory.creeps[i];
    }
  }

  var HarvestCount = var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

  if(HarvestCount<3){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY], 'Harvester'+Game.time, {memory: {role: 'harvester'}});
  }

  for(var name in Game.creeps){
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester'){
      roleHarvester.run(creep);
    }
  }
}
