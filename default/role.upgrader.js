var roleHarvester = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
          if(creep.carry.energy<creep.carryCapacity){
              if(creep.harvest(source[1]) == ERR_NOT_IN_RANGE){
                  creep.moveTo(source[1], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
          }
          else{
              if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                  creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffaa00'}})
              }
          }
    }
  };

module.exports = roleHarvester;
