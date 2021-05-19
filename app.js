const io = require("socket.io")({
    cors: {
        origin: ['http://localhost:3000']
    }
});
const port = 8080;

io.on("connection", socket => {

    console.log(`connect: ${socket.id}`);
    socket.emit("loadStations");

    socket.on('disconnect', () => {
        console.log(`disconnect: ${socket.id}`);
    });
    socket.on("addStation", stationId => {
        io.emit("addStation", stationId);
    });
    socket.on("deleteStation", stationId => {
        io.emit("deleteStation", stationId);
    });
    socket.on("updateStation", stationId => {
        io.emit("updateStation", stationId);
    })
});

io.listen(port);

