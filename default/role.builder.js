var roleBuilder = {
  run: function(creep){
    if(creep.room.controller.ticksToDowngrade>500){
      var containers = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER && structure.energy>0)}});

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
              if(creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(containers[0], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
        }

      }
	}
};

module.exports = roleBuilder;
