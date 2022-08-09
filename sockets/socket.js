// Mensajes sockets

export const socketController = (socket) => {
  console.log('sockete conectado');

  socket.on('mensaje', (payload) => {
    console.log('mensaje ', payload);

    socket.broadcast.emit('mensaje', { msg: 'nuevo msg' });
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectad');
  });
};
