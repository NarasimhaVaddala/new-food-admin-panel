// contexts/SocketContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../core/url";

const SocketContext = createContext();

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);

    newSocket.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to server");

      newSocket.emit("role", { role: "admin" });
    });

    newSocket.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnected from server");
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [SOCKET_URL]);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
