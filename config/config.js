module.exports = {
  settings: {
    prefix: '!', // the commands prefix
    developers: ['cucuyu', '6.28'],// commands can be used by developers only
    moderators: ['cucuyu', '6.28'], // commands can be used by moderators only
    action: 'walk', // 3 types "walk", "move", and "sit" 
    coordinates: {
      x: 0.5,
      y: 0,
      z: 7.5,
      facing: 'FrontRight'
    },
    object: {
      entity_id: '648f0fe90000000000000c82',
      anchor_ix: 0
    }
  },
  periodic: {
    type: 'multiple', // 2 types "multiple" or "single"
    isEnabled: false, // enable or disable periodic messages
    duration: 0.3, // in minutes
    messages: ['mamaguebo', 'mamaguebo', 'reze me la pela', 'Ana la muda', 'cucuyu el papi', 'ten un buen dia', 'you have a nice c0ck', 'reze tiene la cola roja', 'reze es color humilde', 'SEIS tiene dos pies izquierdos', 'SEIS ES FURROOOOOOO', 'heidy estuvo xon medio HR', ' Heidy se volvió emo por culpa de ana', 'heidy necesita blanquearse la cola porque ka tiene negra, y también la cola', 'Alguien de aquí se ve gracioso chambeando', 'alguien de aquí le apesta la cola, no dire nada pero heidy', 'alfuien de aquí tiene el cul0 negro, no dire nada, pero seis', 'alguien de aquí se toca con videos de enanos con sisa y ebola dentro de una rueda de hamsters en llamas con perros lobos zoofilicos']
  },
  authentication: {
    token: '5d36177d9cc4c831200284554b42ba60219389c2ec28702fc0497a61c630b66f',
    room: '658cba42b021d36eb2d49447'
  }
}