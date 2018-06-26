//Count the number of each type of creep
var sources = Game.spawns['Spawn1'].room.find(FIND_SOURCES)

for(i=0, i<sources.length, i++){
  var (harvester + i + List) = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'+i);
  var (harvester + i + Count) = (harvester + i + List).length
}

var upgraderList = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
var builderList = _.filter(Game.creeps, (creep)=>creep.memory.role == 'builder');
var upgraderCount = upgraderList.length;
var builderCount = builderList.length;


var creepSpawner = {
  spawn: function(){

    //Spawn in new creeps
    if(harvester0Count<1){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK,CARRY,WORK], '0Harvester'+Game.time, {memory: {role: 'harvester0'}});
    }

    if(harvester1Count<1){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK,CARRY,WORK], '1Harvester'+Game.time, {memory: {role: 'harvester1'}});
    }

    if(upgraderCount<1){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK], 'Upgrader'+Game.time, {memory: {role: 'upgrader'}});
    }

    if(builderCount<1){
      Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,WORK,WORK], 'Builder'+Game.time, {memory: {role: 'builder'}});
    }
  }
}

module.exports = creepSpawner, harvester0Count, harvester1Count, builderCount, upgraderCount;
