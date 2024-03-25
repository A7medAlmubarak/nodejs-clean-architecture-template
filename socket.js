const { Model, Op } = require("./src/database/config");


let socketIO;
const usersPublicKeys = {};

function initSocket(io) {
  socketIO = io;

  io.on('connection', async (socket) => {
    console.log('A user connected');



    const token = await new Promise((resolve) => {
      socket.on('getToken', (usertoken) => {
        const token = usertoken;
        resolve(token);
      });
    });

    // Generate a pair of keys for the user
    const { privateKeyArmored, publicKeyArmored } = await generateKeyPair();

    console.log(`Public key received from server :`, publicKeyArmored);

    // Emit the public key to the connected client
    socket.emit('publicKey', publicKeyArmored);

    // Store the user's public key on the socket for later use
    socket.publicKeyArmored = publicKeyArmored;
    // Handle other Socket.io events here

    socket.on('sendPublicKey', (receivedPublicKey) => {
      const userId = socket.id;
      usersPublicKeys[userId] = receivedPublicKey;
      console.log(`Public key received from user ${userId}:`, receivedPublicKey);
      socket.emit('receivedUserPublicKey');
    });
    const decryptedSessionKey = await new Promise((resolve) => {
    socket.on('sessionKeyExchange', async(encryptedSessionKey) => {
      console.log('Received encryptedSessionKey:', encryptedSessionKey);
      const decryptedSessionKey = await decryptData(encryptedSessionKey, privateKeyArmored, usersPublicKeys[socket.id]);
      console.log('decryptedSessionKey:', decryptedSessionKey);
      socket.emit('sessionKeyReceived');
      resolve(decryptedSessionKey);

    });
  });

function getSocketIO() {
  return socketIO;
}

module.exports = { initSocket, getSocketIO };