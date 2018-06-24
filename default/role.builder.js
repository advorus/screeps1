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
                  if(object.hits < object.hitsMax){
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
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;
