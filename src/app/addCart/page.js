'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import "./add.css"

export default function Home() {

    const [add, setAdd] = useState()
    const [loading, setLoading] = useState(false)

    function añadir(e) {
        e.preventDefault()
        setLoading(true)

        const data = new FormData(e.target)
        setAdd({
            idUsuario: data.get("idUsuario"), 
            date: data.get("fecha"), 
            products: [{
                productId: data.get("idProducto"), 
                quantity: data.get("cantProducto")
            }]
        })    
    }

    useEffect(()=>{
        if (add) {
            console.log("buienas")
            axios.post('https://fakestoreapi.com/carts', add)
            setLoading(false)
            alert("Se ha añadido el carrito correctamente")
        }
    }, [add])
    return (
        <div className="containeradd">
            <h1>Agrega un nuevo carrito</h1>
            <form onSubmit={añadir}>
                <label htmlFor="">Id de usuario</label>
                <input name="idUsuario" type="number" />
                <label htmlFor="">Fecha</label>
                <input name="fecha" type="date" />
                <label htmlFor="">Id del producto</label>
                <input name="idProducto" type="number" />
                <label htmlFor="">Cantidad</label>
                <input name="cantProducto" type="number" />

                <button type="submit" disabled={loading}>Añadir producto</button>
            </form>
        </div>

    )
}