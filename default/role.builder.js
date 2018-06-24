var roleBuilder = {
  run: function(creep){
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	    }

	    if(creep.memory.building) {
	        var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(constructionSite.length) {
                if(creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else{
              var repair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: function(object){
                  if(object.hits < 200000){
                    return true;
                  }
                  else{
                    return false;
                  }
                }
              })

              if(creep.repair(repair)==ERR_NOT_IN_RANGE){
                  creep.moveTo(repair, {visualizePathStyle: {stroke: '#ffffff'}});
              }
            }
	    }
	    else {
            var source = creep.room.find(FIND_SOURCES);
            var harvester0Count = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester0');
            var harvester1Count = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester1');
            var upgraderCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            var builderCount = _.filter(Game.creeps, (creep)=>creep.memory.role == 'builder');

            if(harvester0Count.length>=3 && upgraderCount.length>=1 && builderCount.length>=2 && harvester1Count.length>=1){
            if(creep.withdraw(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
          }
	    }
	}
};

module.exports = roleBuilder;
