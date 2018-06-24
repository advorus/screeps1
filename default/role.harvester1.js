var roleHarvester1 = {
  run: function(creep) {
          var source = creep.room.find(FIND_SOURCES);
          var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (
            (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_CONTAINER)
            && structure.energy < structure.energyCapacity)}});

          if(creep.memory.filling && creep.carry.enery == 0){
            creep.memory.filling = false;
          }
          if(!creep.memory.filling && creep.carry.energy == creep.carryCapacity) {
            creep.memory.filling = true;
          }
          if(creep.room.energyAvailable == creep.room.energyCapacityAvailable && creep.carry.energy>0){
            creep.memory.filling = false;
          }
          if(creep.memory.filling){
            if(Game.spawns['Spawn1'].energy<Game.spawns['Spawn1'].energyCapacity){
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
        else{
          if(creep.harvest(source[1]) == ERR_NOT_IN_RANGE){
            creep.moveTo(source[1], {visualizePathStyle: {stroke: '#ffaa00'}});
          }
        }
      }
    };

module.exports = roleHarvester1;
