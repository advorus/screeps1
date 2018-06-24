var roleHarvester0 = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION && structure.energy < structure.energyCapacity)}});

        if(creep.room.energyAvailable < creep.room.energyCapacityAvailable){
          if(creep.carry.energy<creep.carryCapacity){
              if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
                  creep.moveTo(source[0], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
          }
          else if(Game.spawns['Spawn1'].energy<Game.spawns['Spawn1'].energyCapacity){
              if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                  creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffaa00'}})
              }
          }

          else {
            if(creep.transfer(creep.pos.findClosestByPath(extensions), RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
              creep.moveTo(creep.pos.findClosestByPath(extensions));
            }
          }
      }
    }
  };

module.exports = roleHarvester0;
