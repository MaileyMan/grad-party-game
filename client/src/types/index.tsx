import React, { SetStateAction } from "react";
import { SendJsonMessage } from "react-use-websocket/dist/lib/types";

export interface LoginProps {
  username: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  setJoined: React.Dispatch<SetStateAction<boolean>>;
}

export interface LobbyProps {
  username: string;
  setJoined: React.Dispatch<SetStateAction<boolean>>;
  setStarted: React.Dispatch<SetStateAction<boolean>>;
}

export interface CarouselProps {
  players: player[]
}

export interface webSocketResponse {
  started: boolean;
  players: player[];
  target: player;
}

interface player {
  username: string;
}

export interface jsonMessages {
  sendJsonMessage: SendJsonMessage;
  lastJsonMessage: webSocketResponse;
}