
module.exports = {

  commandPose7: async (bot, user, message, position) => {
  try {
    
      bot.player.emote(user.id, "emote-pose7");
      // Tu lógica aquí (si necesitas realizar alguna tarea repetit
    
    } catch (error) {
      console.error(error);
    }
  },
  
  commandSad: async (bot, user, message, position) => {
  try {
    
      bot.player.emote(user.id, "emote-sad");
      // Tu lógica aquí (si necesitas realizar alguna tarea repetit
    
    } catch (error) {
      console.error(error);
    }
  },
  
  commandNo: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-no")
  
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  
  commandKiss: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-kiss")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandYes: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-yes")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandLaughing: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-laughing")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandHello: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-hello")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandShy: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-shy")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandWave: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-wave")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandTired: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-tired")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandAngry: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "emote-angry")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  commandSitfloor: async (bot, user, message) => {
  try {
  bot.player.emote(user.id, "idle-loop-sitfloor")
  }catch (error) {
      console.error(error); // Log any errors that occur
  }
},
  
  
}