//Import the required roles
var roleHarvester0 = require('role.harvester');
var roleHarvester1 = require('role.harvester1')
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var assignCreeps = {
  run: function(){
    //assign all creeps to correct roles
    for(var name in Game.creeps){
      var creep = Game.creeps[name];

      if(creep.memory.role == 'harvester0'){
        roleHarvester0.run(creep);
      }
      if(creep.memory.role == 'upgrader'){
        roleUpgrader.run(creep);
      }
      if(creep.memory.role == 'builder'){
        roleBuilder.run(creep);
      }
      if(creep.memory.role == 'harvester1'){
        roleHarvester1.run(creep);
      }
    }
  }
};

module.exports = assignCreeps;
