var roleHarvester0 = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var dropbox = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: function(object)
            {return object.structureType == STRUCTURE_EXTENSION}
          });

        if(dropbox.energy<dropbox.energyCapacity){
          if(creep.carry.energy<creep.carryCapacity){
            if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(source[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
          else{
            creep.drop(RESOURCE_ENERGY);
          }
        }
    }
  };

module.exports = roleHarvester0;
