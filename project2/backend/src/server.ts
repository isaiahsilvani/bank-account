import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import config from './config/config'

const app = express()

const server = http.createServer(app)

const PORT = config.server.port

const io = new Server(server, { cors: {origin: "http://localhost:3000"}})

io.on("connection", (socket) => {
  console.log("client connected")
})


server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
