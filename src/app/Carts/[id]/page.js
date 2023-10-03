'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import "./carritos.css"

export default function Home({ params }) {

    const [prodsCart, setProdsCart] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/' + params.id).then(response => {
            setProdsCart(response.data.products)
            console.log(response.data.products);
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
            {prodsCart.map((product) => {
                return (
                    <Link key={product.productId} href={"/products/" + product.productId}>
                        <div className="card">
                            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170679.png" alt="Carrito de compras" />
                            <h1>Producto: {product.productId}</h1>
                            <h1>Cantidad: {product.quantity}</h1>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}