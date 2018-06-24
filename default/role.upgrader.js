var roleUpgrader = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION && structure.energy>0)}});

          if(creep.carry.energy > 0){
              if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffaa00'}})
              }
          }
          else{
            if(extensions.length>3){
              if(creep.withdraw(extensions[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(extensions[0], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
            }
          }
    }
  };

module.exports = roleUpgrader;
