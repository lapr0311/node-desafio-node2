const fs = require('fs') ;



const leerCanciones = async (req, res) => {
    const canciones = JSON.parse(fs.readFileSync("repositorio.json"));
    res.json(canciones);
  };




const crearcancion = async (req , res) => {
    const crearcanciones = req.body
    const crearcancion = JSON.parse(fs.readFileSync('repositorio.json'))
    crearcancion.push(crearcanciones)
    
    fs.writeFileSync('repositorio.json', JSON.stringify(crearcancion))

    res.send('cancion agregada')
}


const borrarCancion = async (req ,res) => {
    const {id} =req.params
    const borrarCanciones = JSON.parse(fs.readFileSync("repositorio.json"))
    const index = borrarCanciones.findIndex(b => b.id == id)
    borrarCanciones.splice(index,1)
    fs.writeFileSync("repositorio.json", JSON.stringify(borrarCanciones))
    res.send("cancion eliminada")

}

const editarCancion = async (req ,res) => {
    const {id} =req.params
    const editarCancion = req.body
    const editarCanciones = JSON.parse(fs.readFileSync("repositorio.json"))
    const index = editarCanciones.findIndex(b => b.id == id)
    editarCanciones[index] = editarCancion
    fs.writeFileSync("repositorio.json", JSON.stringify(editarCanciones))
    res.send("cancion modificada")

}




module.exports = {leerCanciones, crearcancion,borrarCancion,editarCancion}