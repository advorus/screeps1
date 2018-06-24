var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
  for(var i in Memory.creeps){
    if(!Game.creeps[i]){
      delete Memory.creeps[i];
    }
  }


  //Count the number of each type of creep
  var harvestCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  var upgraderCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  var builderCount = _.filter(Game.creeps, (creep)=>creep.memory.role == 'builder');

  //Spawn in new creeps
  if(harvestCount.length<3){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK], 'Harvester'+Game.time, {memory: {role: 'harvester'}});
  }

  if(upgraderCount.length<1){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK], 'Upgrader'+Game.time, {memory: {role: 'upgrader'}});
  }

  if(builderCount.length<2){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK], 'Builder'+Game.time, {memory: {role: 'builder'}});
  }


  //assign all creeps to correct roles
  for(var name in Game.creeps){
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester'){
      roleHarvester.run(creep);
    }
    if(harvestCount.length>=3 && upgraderCount.length>=1 && builderCount.length>=2){
      if(creep.memory.role == 'upgrader'){
        roleUpgrader.run(creep);
      }
      if(creep.memory.role == 'builder'){
        roleBuilder.run(creep);
      }
    }
  }
}
