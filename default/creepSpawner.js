//Count the number of each type of creep
var harvester0Count = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester0');
var harvester1Count = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester1');
var upgraderCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
var builderCount = _.filter(Game.creeps, (creep)=>creep.memory.role == 'builder');

var creepSpawner = {
  spawn: function(){

    //Spawn in new creeps
    if(harvester0Count.length<3){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK,CARRY,WORK], '0Harvester'+Game.time, {memory: {role: 'harvester0'}});
    }

    if(harvester1Count.length<1){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK,CARRY,WORK], '1Harvester'+Game.time, {memory: {role: 'harvester1'}});
    }

    if(upgraderCount.length<1){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK], 'Upgrader'+Game.time, {memory: {role: 'upgrader'}});
    }

    if(builderCount.length<1){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK], 'Builder'+Game.time, {memory: {role: 'builder'}});
    }
  }
}

module.exports = creepSpawner;
