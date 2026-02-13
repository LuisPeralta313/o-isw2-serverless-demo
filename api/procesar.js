export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`
  });
}

// código Mini reto agregando timestamp y simulando error  si nombre= "error"
//module.exports = (req, res) => {
  //const { nombre = "Visitante" } = req.query;
  

  //if (nombre.toLowerCase() === "error") {
    //return res.status(500).json({
      //error: "Error simulado",
      //mensaje: "El procesamiento falló intencionalmente",
      //timestamp: new Date().toISOString()
    //});
  //}
  
  //const timestamp = new Date().toISOString();
  
  //res.status(200).json({
    //mensaje: `Hola ${nombre.toUpperCase()}, tu solicitud ha sido procesada`,
    //procesadoPor: "/api/procesar",
    //timestamp: timestamp,
    //longitudNombre: nombre.length
  //});
//};
