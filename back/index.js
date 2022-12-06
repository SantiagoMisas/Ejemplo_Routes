import express from "express"
import dataBase from "./database/conexionDatabase.js";
import productoRouter from "./routes/RouterProducto.js";
import cors from 'cors'
const app=express();
const port=3100

try {
   await dataBase.authenticate() 
   console.log("conexion exitosa a la base de datos")
} catch (error) {
    console.log(`conexion errada: ${error}`)
}
app.use(cors())
app.use(express.json())
app.use('/productos', productoRouter)

app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto ${port}")
    console.log("Servidor corriendo en el puerto"+port)
    console.log("Servidor corriendo en http://localhost:3100")
})