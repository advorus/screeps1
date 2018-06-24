var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
  for(var i in Memory.creeps){
    if(!Game.creeps[i]){
      delete Memory.creeps[i];
    }
  }

  var harvestCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  var upgraderCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  if(harvestCount<3){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY], 'Harvester'+Game.time, {memory: {role: 'harvester'}});
  }
  if(upgraderCount<3){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY], 'Upgrader'+Game.time, {memory: {role: 'upgrader'}});
  }

  for(var name in Game.creeps){
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester'){
      roleHarvester.run(creep);
    }
    if(creep.memory.role == 'upgrader'){
      roleUpgrader.run(creep);
    }
  }
}
