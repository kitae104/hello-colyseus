import {Server, Room} from "colyseus";

// 포트 설정 
const port = process.env.port || 3000

// 게임 서버 만들기 
const gameServer = new Server();

// kitae 라 불리는 방 만들기 
gameServer.define("kitae", Room);

// listen
gameServer.listen(port);