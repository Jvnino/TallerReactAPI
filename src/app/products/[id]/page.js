'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import "./producto.css"

export default function Home({ params }) {

    const [prodsGen, setProdsGen] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + params.id).then(response => {
            setProdsGen(response.data)
            console.log(response.data);
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <h2>cargando</h2>
        )
    }

    return (
        <div className="card-container">
            <div key={prodsGen.id} className="product-card">
                <img src={prodsGen.image}></img>
                <h1>Nombre: {prodsGen.title}</h1>
                <h1>Precio: {prodsGen.price}</h1>
                <h1>Descripción: {prodsGen.description}</h1>
                <h1>Categoria: {prodsGen.category}</h1>
                <h1>Rating:  {prodsGen.rating.rate}</h1>
                <h1>Rating:  {prodsGen.rating.count}</h1>
            </div>
        </div>
    )
}