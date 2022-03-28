const net = require("net");

const { 2: host, 3: port } = process.argv;

const server = net.createServer((socket) => {});

server.listen(port, host, () =>
  console.log(`Server listen in host: ${host} and port: ${port}`)
);
