const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./src/users')

const PORT = process.env.PORT || 5000

const router = require('./src/router')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
  console.log('We have a new connection')

  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room })
    if (error) cb(error)

    socket.emit('message', {
      user: 'admin',
      text: `Hello ${user.name}, welcome to ${user.room}`,
    })
    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name} has joined!`,
    })

    socket.join(user.room)

    cb()
  })

  socket.on('sendMessage', (message, cb) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })

    cb()
  })

  socket.on('disconnect', () => {
    console.log('User had left')
  })
})

app.use(router)

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
)
