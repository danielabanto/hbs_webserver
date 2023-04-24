const http = require("http");

http
  .createServer((req, res) => {
    // console.log(req);
    // res.writeHead(200, { "Content-type": "text/plain" });
    // res.writeHead(200, { "Content-type": "application/json" });
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    // const persona = {
    //   id: 1,
    //   name: "Daniel",
    // };
    // res.write(JSON.stringify(persona));
    res.write("id, nombre\n");
    res.write("1, Dan\n");
    res.write("2, Maje\n");
    res.write("3, Jose\n");
    res.write("4, Santi\n");
    res.write("5, Juli\n");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
