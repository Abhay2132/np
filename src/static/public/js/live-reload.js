const socket = io();
socket.on("refresh", () => location.href = location.href);