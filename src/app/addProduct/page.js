'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import "./product.css"

export default function Home() {

    const [addProduct, setAddProduct] = useState()
    const [loading, setLoading] = useState(false)

    function añadir(e) {
        e.preventDefault()
        setLoading(true)

        const data = new FormData(e.target)
        setAddProduct({
            title: data.get("titulo"), 
            price: parseFloat(data.get("precio")), 
            description: data.get("descripcion"),
            category: data.get("categoria"),
            image: data.get("imagen"),
        })    
    }

    useEffect(()=>{
        if (addProduct) {
            console.log("buienas")
            axios.post('https://fakestoreapi.com/products', addProduct)
            setLoading(false)
            alert("Se ha añadido el producto correctamente")
        }
    }, [addProduct])
    return (
        <div className="containeraddProduct">
            <h1>Agrega un nuevo carrito</h1>
            <form onSubmit={añadir}>
                <label htmlFor="">Titulo</label>
                <input name="titulo" type="text" />
                <label htmlFor="">Precio</label>
                <input name="precio" type="text"/>
                <label htmlFor="">Descripción</label>
                <input name="descripcion" type="text" />
                <label htmlFor="">Categoria</label>
                <input name="categoria" type="text" />
                <label htmlFor="">Imagen</label>
                <input name="imagen" type="text" />

                <button type="submit" disabled={loading}>Añadir producto</button>
            </form>
        </div>

    )
}