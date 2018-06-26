var roleUpgrader = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var containers = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY]>0)}});
        var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION && structure.store[RESOURCE_ENERGY]>0)}});

          if(creep.carry.energy > 0){
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
            //else if(extensions.length && ){

            //}
            else{
              if(creep.harvest(source[0])==ERR_NOT_IN_RANGE){
                creep.moveTo(source[0]);
              }
            }
          }

    }
  };

module.exports = roleUpgrader;
