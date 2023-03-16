const {Router} = require('express')
const {leerCanciones,crearcancion,borrarCancion, editarCancion}  = require('../controller/canciones')



const router = Router();

router.get("/", (req, res) =>{
    res.sendFile(__dirname + "/server/index.html")
}
)

//leer canciones


 router.get('/canciones', leerCanciones)



 //crear cancion

 router.post('/canciones',crearcancion)

// eliminar cancion

router.delete('/canciones/:id', borrarCancion)


// editar cancion

router.put('/canciones/:id', editarCancion)
 

module.exports = router;