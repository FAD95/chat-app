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

    const date = new Date()
    let hour = date.getHours()
    let minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const time = hour + ':' + minutes

    socket.emit('message', {
      user: 'admin',
      text: `Hello ${user.name}, welcome to ${user.room}`,
      date: time,
    })
    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name} has joined!`,
      date: time,
    })

    socket.join(user.room)

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    })
    cb()
  })

  socket.on('sendMessage', (message, cb) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', {
      user: user.name,
      text: message.text,
      date: message.date,
    })
    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    })

    cb()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} has left.`,
      })
    }
  })
})

app.use(router)

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
)
