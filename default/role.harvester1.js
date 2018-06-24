var roleHarvester1 = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION && structure.energy < structure.energyCapacity)}});


        if(creep.room.energyAvailable < creep.room.energyCapacityAvailable){
          if(creep.carry.energy<creep.carryCapacity){
              if(creep.harvest(source[1]) == ERR_NOT_IN_RANGE){
                  creep.moveTo(source[1], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
          }
          else if(Game.spawns['Spawn1'].energy<Game.spawns['Spawn1'].energyCapacity){
                if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffaa00'}})
                }
          }
        }
        else{
          if(creep.transfer(extensions[0], RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
            creep.moveTo(extensions[0]);
          }
        }
    }
  };

module.exports = roleHarvester1;