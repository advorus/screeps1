var roleHarvester1 = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var dropbox = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: function(object)
            {return object.structureType == STRUCTURE_EXTENSION}
          });

        if(dropbox.energy<dropbox.energyCapacity){
          if(creep.carry.energy<creep.carryCapacity){
            if(creep.harvest(source[1]) == ERR_NOT_IN_RANGE){
                creep.moveTo(source[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
          else{
            creep.transfer(dropbox, RESOURCE_ENERGY, creep.carryCapacity);
          }
        }
    }
  };

module.exports = roleHarvester1;
