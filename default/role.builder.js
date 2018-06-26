var harvester0Count = require('creepSpawner');
var harvester1Count = require('creepSpawner');


var roleBuilder = {
  run: function(creep){
    if(creep.room.controller.ticksToDowngrade>2000){
      var source = creep.room.find(FIND_SOURCES);
      var containers = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY]>0)}});
      var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION && structure.energy>0)}});
      var harvesterCount = harvester0Count+harvester1Count;

  	    if(creep.memory.building && creep.carry.energy == 0) {
              creep.memory.building = false;
  	    }
  	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
  	        creep.memory.building = true;
  	    }

  	    if(creep.memory.building) {
  	        var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
              if(constructionSite.length) {
                  if(creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                      creep.moveTo(constructionSite[0], {visualizePathStyle: {stroke: '#ffffff'}});
                  }
              }
              else{
                var repair = creep.room.find(FIND_STRUCTURES, {
                  filter: function(object){
                    if(object.hits < 150000){
                      return true;
                    }
                    else{
                      return false;
                    }
                  }
                })

                if(creep.repair(repair[0])==ERR_NOT_IN_RANGE){
                    creep.moveTo(repair[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
              }
  	    }
  	    else {
          if(containers.length){
              if(creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
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
	}
};

module.exports = roleBuilder;
