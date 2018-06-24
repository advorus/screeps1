var roleHarvester = require('role.harvester');

module.exports.loop = function () {
  if(Game.spawns['Spawn1'].energy>200){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY], 'Harvester'+Game.time, {memory: {role: 'harvester'}});
  }
  for(var name in Game.creeps){
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester'){
      roleHarvester.run(creep);
    }
  }
}
