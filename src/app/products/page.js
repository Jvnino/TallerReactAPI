'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import "./products.css"

export default function Home() {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(response => {
            setProducts(response.data)
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
            {products.map((products) => {
                return (
                    <Link key={products.id} href={"/products/" + products.id}>
                        <div className="card">
                            <img src={products.image}></img>
                            <h1>Nombre: {products.title}</h1>
                            <h1>Precio: {products.price}</h1>
                            <h1>Categoria {products.category}</h1>
                        </div>
                    </Link>
                )
            })}

        </div>

    )
}