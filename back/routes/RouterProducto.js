import express from 'express'
import {crearProducto, mostrarProductos, mostrarProducto}  from '../controllers/ControllerProducto.js';
import cors from 'cors'

const productoRouter= express.Router();
productoRouter.post('/', crearProducto)
productoRouter.get('/', mostrarProductos)
productoRouter.get('/:id', mostrarProducto)

export default productoRouter