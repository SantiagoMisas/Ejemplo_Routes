
import Producto from "../models/ModelProducto.js";


const crearProducto= async(req, res)=> {
 try {
    await Producto.create(req.body)
    res.json({
        message: "Usuario creado correctamente"
    })
 } catch (error) {
    res.json({
        message: `No se pudo registrar el usuario: ${error}`
    })
 }
}

async function mostrarProductos(req, res){
    try {
        const productos=await Producto.findAll()
        res.json(productos)
    } catch (error) {
        res.json({
            message: "Base de datos vacia"
        })
    }
}

const mostrarProducto= async(req, res)=> {
try {
    const producto=await Producto.findOne({where:{id: req.params.id}})
    res.json(producto)
} catch (error) {
    res.json({
        message: `Proucto no existe en la base de datos `
    })
    
}
   }
const editarProducto= async(req, res)=> {
try {
    
} catch (error) {
    
}
   }
const eliminarProducto= async(req, res)=> {
try {
    
} catch (error) {
    
}
   }


export {crearProducto, mostrarProductos, mostrarProducto}
