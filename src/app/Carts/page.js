'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import "./carts.css"

export default function Home() {

    const [carts, setCarts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts').then(response => {
            setCarts(response.data)
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
            {carts.map((cart) => {
                return (
                    <Link key={cart.id} href={"/Carts/" + cart.id}>
                        <div className="card">
                            <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Carrito de compras" />
                            <h1>Carrito {cart.id}</h1>
                        </div>
                    </Link>
                )
            })}

        </div>

    )
}