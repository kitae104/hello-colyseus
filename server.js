import {Server, Room} from "colyseus";
import {WebSocketTransport} from "@colyseus/ws-transport";
import express from "express";
import cors from "cors";
import http from "http";
import chatroom from "./chatroom.js"


// 포트 설정 
const port = process.env.port || 3000
const app = express()

// 미들웨어 
app.use(cors());
app.use(express.json());

// 게임 서버 만들기 
const gameServer = new Server({
  transport: new WebSocketTransport({
    server: http.createServer(app)
  })
});

// kitae 라 불리는 방 만들기 
gameServer.define("kitae", chatroom);

// public 폴더 설정 
app.use(express.static("public"));

// listen
gameServer.listen(port);