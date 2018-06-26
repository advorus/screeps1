var harvester0Count = require('creepSpawner');
var harvester1Count = require('creepSpawner');

var roleUpgrader = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var containers = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY]>0)}});
        var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION && structure.energy>0)}});
        var harvesterCount = harvester0Count+harvester1Count;

        if(creep.memory.upgrading && creep.carry.energy == 0) {
              creep.memory.upgrading = false;
  	    }
  	    if(!(creep.memory.upgrading) && creep.carry.energy == creep.carryCapacity) {
  	        creep.memory.uprading = true;
  	    }

        if(creep.memory.upgrading){
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
              creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffaa00'}})
            }
        }
        else{
          if(containers.length){
            if(creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
              creep.moveTo(containers[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
          }
          else if(Game.spawns['Spawn1'].energy>0 && harvesterCount>1){
            if(creep.withdraw(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
              creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffffff'}})
            }
          }
          else{
            if(creep.harvest(source[0])==ERR_NOT_IN_RANGE){
              creep.moveTo(source[0]);
            }
          }
        }

    }
  };

module.exports = roleUpgrader;
