var roleHarvester0 = require('role.harvester');
var roleHarvester1 = require('role.harvester1')
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
  for(var i in Memory.creeps){
    if(!Game.creeps[i]){
      delete Memory.creeps[i];
    }
  }


  //Count the number of each type of creep
  var harvester0Count = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester0');
  var harvester1Count = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester1');
  var upgraderCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  var builderCount = _.filter(Game.creeps, (creep)=>creep.memory.role == 'builder');


  //Spawn in new creeps
  if(harvester0Count.length<3){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK], '0Harvester'+Game.time, {memory: {role: 'harvester0'}});
  }

  if(harvester1Count.length<1){
    Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK], '1Harvester'+Game.time, {memory: {role: 'harvester1'}});
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

    if(creep.memory.role == 'harvester0'){
      roleHarvester0.run(creep);
    }
    if(creep.memory.role == 'upgrader'){
      roleUpgrader.run(creep);
    }
    if(creep.memory.role == 'builder'){
      roleBuilder.run(creep);
    }
    if(creep.memory.role == 'harvester1'){
      roleHarvester1.run(creep);
    }
  }

}
