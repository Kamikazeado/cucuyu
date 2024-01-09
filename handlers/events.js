const { settings } = require("../config/config.js");
const commands = require("../handlers/commands.js");
const emote = require("../emotes/emotes.js");
const teleport =
  require("../teleport/teleport.js")
module.exports = {
  handleReady: (bot, session) => {
    try {
      console.log(`Bot is now online in ${session.room_info.room_name}.\nBot ID: ${session.user_id}\nOwner ID: ${session.room_info.owner_id}\nClient Limits: ${session.rate_limits.client}\nSocial Limits: ${session.rate_limits.socials}\nConnection ID: ${session.connection_id}\nSDK Version: ${session.sdk_version}`.cyan)
      const coords = settings.coordinates;
      const object = settings.object;

      if (settings.action === 'walk') {
        bot.move.walk(coords.x, coords.y, coords.z, coords.facing);
      } else if (settings.action === 'teleport') {
        bot.player.teleport(session.user_id, coords.x, coords.y, coords.z, coords.facing);
      } else if (settings.action === 'sit') {
        bot.move.sit(object.entity_id, object.anchor_ix)
      }
    } catch (error) {
      console.error(error);
    }
  },

  handleChat: (bot, user, message) => {
    try {
      //console.log(`[MESSAGE]: ${user.username}:${user.id}`, message);
      if (message.startsWith(settings.prefix)) {
        const command = message.slice(settings.prefix.length).split(' ')[0];
        const availablecommands = ['🔐Administración:\n!come', '!emoteall', '\n🕺Emotes:\n!pose7', '!no', '!kiss', '!sad', '!yes', '!wave', '!laughing', '!hello', '!shy', '!tired', '!sitfloor'];
  
        switch (command) {
            
          case 'tele':
          teleport.commandTeleports(bot, user, message);
            break;
          case 'sitfloor':
            emote.commandSitfloor(bot, user, message);
            
          case 'angry':
            emote.commandAngry(bot, user, message);
            break;
            
          case 'tired':
            emote.commandTired(bot, user, message);
            break;
            
          case 'wave':
            emote.commandWave(bot, user, message);
            break;
            
          case 'shy':
            emote.commandShy(bot, user, message);
            break;

          case 'hello':
            emote.commandHello(bot, user, message);
            break;
            
          case 'laughing':
            emote.commandLaughing(bot, user, message);
            break;
            
          case 'yes':
            emote.commandYes(bot, user, message);
            break;
          
          case 'come':
            commands.commandCome(bot, user, message);
            break;
          case 'emoteall':
        commands.commandEmoteAll(bot, user, message);
            break;
          case 'pose7':
            emote.commandPose7(bot, user, message);
            break;
          case 'kiss':
            emote.commandKiss(bot, user, message);
            break;
          case 'no':
            emote.commandNo(bot, user, message);
            break;
          case 'sad':
            emote.commandSad(bot, user, message);
            
            break;
          default:
            bot.whisper.send(user.id, `\n⚠️Comando invalido: "${command}"\n✅Comandos disponibles: \n\n${availablecommands.join(", ")}`)
        }
      } else if (message.trim() === 'dance') {
        commands.commandEmote(bot, user, message);
      }
    } catch (error) {
      console.error(error);
    }
  },

  handleWhisper: (bot, user, message) => {
    try {
      
      bot.message.send(`${message}`);
      console.log(`[WHISPER]: ${user.username}:${user.id}`, message);
    } catch (error) {
      console.error(error);
    }
  },

  handleDirectMessages: (bot, user, data) => {
    try {
      // Process the direct message event
      //console.log('Direct message received');
      //console.log('User ID:', user);
      //console.log('Conversation ID:', data.id);
      //console.log('Is New:', data.isNew);

      // Perform additional actions or responses based on the message
    } catch (error) {
      console.error(error);
    }
  },

  handlePlayerJoin: async (bot, user, react) => {
    try {
      var reactions = ['heart', 'wink', 'thumbs', 'clap', 'wave'];
      const randomreactions = Math.floor(Math.random() * reactions.length);
      const randomreact = reactions[randomreactions]
      
      bot.player.react(user.id, `${randomreact}`);

      await
        
      bot.message.send(`Bienvenido ${user.username} a la sala, espero que te diviertas!`);
      await
        bot.message.send('Si quieres alquilar o comprar un bot para tus porpias salas contáctate con @cucuyu')
      //console.log(`[PLAYER JOINED]: ${user.username}:${user.id}`)
      bot.message.send('Susurrame tu confesion 😍👈')
      await
      bot.player.emote(user.id, "emote-hello");
    } catch (error) {
      console.error(error);
    }
  },

  handlePlayerLeave: (bot, user) => {
    try {
      //console.log(`[PLAYER LEFT]: ${user.username}:${user.id}`)
    } catch (error) {
      console.error(error);
    }
  },

  handlePlayerEmotes: (bot, sender, receiver, emote) => {
    try {
      const today = new Date();
      console.log(`${sender.username} sent ${emote} to ${receiver.username} at ${today}`);
    } catch (error) {
      console.error(error);
    }
  },

  handlePlayerReactions: (bot, sender, receiver, reaction) => {
    try {
      //console.log(`${sender.username} sent ${reaction} to ${receiver.username}`);
    } catch (error) {
      console.error(error);
    }
  },

  handlePlayerTips: (bot, sender, receiver, item) => {
    try {
      //console.log(`Tip reaction from ${sender.username} to ${receiver.username}: ${item.amount} ${item.type}`);
    } catch (error) {
      console.error(error);
    }
  },

  handlePlayerMovements: (bot, user, position) => {
    try {
      if ('x' in position && 'y' in position && 'z' in position && 'facing' in position) {
        //console.log(`${user.username} moved to coordinates: ${position.x}, ${position.y}, ${position.z}, ${position.facing}`);
      } else if ('entity_id' in position && 'anchor_ix' in position) {
        //console.log(`${user.username} moved to anchor ${position.entity_id} at index ${position.anchor_ix}`);
      }
    } catch (error) {
      console.error(error);
    }
  },

  handleVoiceChat: (bot, users, seconds_left) => {
    try {
      //console.log(`Seconds Left: ${seconds_left}`)
    //console.log('Users:');
      users.forEach(({ user, status }) => {
        //console.log('User ID:', user.id);
        //console.log('Username:', user.username);
        //console.log('Status:', status);
        //console.log('---');
      });
    } catch (error) {
      console.error(error);
    }
  },

  handleErrors: (error) => {
    try {
      //console.log(`Highrise API Request Error:`, error);
    } catch (error) {
      console.error(error);
    }
  }
}