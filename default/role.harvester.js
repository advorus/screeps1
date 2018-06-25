var roleHarvester0 = {
  run: function(creep) {
    var source = creep.room.find(FIND_SOURCES);
    var extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (
      (structure.structureType == STRUCTURE_EXTENSION)
      && structure.energy < structure.energyCapacity)}});
    var containers = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (
      structure.structureType == STRUCTURE_CONTAINER
      && structure.energy < structure.energyCapacity)}});

    if(creep.memory.filling && creep.carry.energy == 0){
      creep.memory.filling = false;
    }
    if(!creep.memory.filling && creep.carry.energy == creep.carryCapacity) {
      creep.memory.filling = true;
    }

    if(creep.memory.filling){
      if(Game.spawns['Spawn1'].energy<Game.spawns['Spawn1'].energyCapacity){
          if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
              creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffaa00'}})
          }
      }

      else if (extensions.length) {
        if(creep.transfer(creep.pos.findClosestByPath(extensions), RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
          creep.moveTo(creep.pos.findClosestByPath(extensions));
        }
      }
      else {
        if(creep.transfer(creep.pos.findClosestByPath(containers), RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
          creep.moveTo(creep.pos.findClosestByPath(containers));
        }
      }
  }
      else{
        if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
          creep.moveTo(source[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
      }
    }
  };

module.exports = roleHarvester0;
