 const { settings } = require("../config/config");
const developers = settings.developers;
module.exports = {
  
  commandTeleports: async (bot, user, message, args) => {
    try {
      if 
  
  
(developers.includes(user.username)) {
      
          const args = message.split(' ');
    // Check if the command usage is valid
    if (args.length < 3) {
      return bot.whisper.send(user.id, `Uso de comando no válido:\nEjemplo: !tele @user <ubicación>`);
    }

    const target_name = args[1];
    // Check if the target name starts with '@'
    if (!target_name.startsWith("@")) {
      return bot.whisper.send(user.id, `Uso de comando no válido:\nEjemplo: !tele @user <ubicación>`);
    }

    const target = target_name.replace("@", "");
    const target_id = await bot.room.players.cache.id(target);

    // Check if the target player is in the room
    if (!target_id) {
      return bot.whisper.send(user.id, `El jugador ${target_name} no está en la sala!`);
    }

    const availableLocations = ['1', '2', '3'];
    let coordinates;
      
    switch (args[2]?.toLowerCase()) {
        
      case '1':
        coordinates = {
          x: 40,
          y: 20,
          z: 40,
          facing: 'FrontRight'
        };
        break;
      case '2':
        coordinates = {
          x: 10,
          y: 2,
          z: 0,
          facing: 'BackLeft'
        };
        break;
      case '3':
        coordinates = {
          x:7.5,
          y:0,
          z:7.5,
          facing: 'FrontRight'
        };
        break;
      default:
        return bot.whisper.send(user.id, `Ubicación inválida\nUnicaciones habilitadas: ${availableLocations.join(", ")}\nEjemplo !tele @cucuyu 1`);
    }

    // Teleport the target player to the specified coordinates
    await bot.player.teleport(target_id, coordinates.x, coordinates.y, coordinates.z, coordinates.facing);
  bot.player.emote(target_id, 'emote-hello')
  }
    }catch (error) {
      console.error(error); // Log any errors that occur
  }
    
},
}
  

