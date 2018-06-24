var roleUpgrader = {
  run: function(creep) {
        var source = creep.room.find(FIND_SOURCES);
          if(creep.carry.energy > 0){
              if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                  creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffaa00'}})
              }
          }
          else{
            var harvestCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            var upgraderCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            var builderCount = _.filter(Game.creeps, (creep)=>creep.memory.role == 'builder');
            
            if(harvestCount.length>=3 && upgraderCount.length>=1 && builderCount.length>=2){
              if(creep.withdraw(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                  creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
            }
          }
    }
  };

module.exports = roleUpgrader;
