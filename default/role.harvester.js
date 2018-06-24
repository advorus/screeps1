var roleHarvester0 = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
        var extensions = _.filter(creep.room.find(FIND_SOURCES), {
          filter: function(object)
            {return object.structureType == STRUCTURE_EXTENSION && object.energy<object.energyCapacity}
          });

        if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity){
          if(creep.carry.energy<creep.carryCapacity){
              if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
                  creep.moveTo(source[0], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
          }
          else{
                if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffaa00'}})
                }
          }
        }
        else if(extensions.length){
          if(creep.transfer(extensions[0])==ERR_NOT_IN_RANGE){
            creep.moveTo(extensions[0]);
          }
        }
    }
  };

module.exports = roleHarvester0;
