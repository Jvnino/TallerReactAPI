import Link from 'next/link';

import './globals.css'
export default function Header({children}){

  return(
    
    <div className="General">
      <header>
        <h1>Nombre de la App</h1>
      </header>

      <div className="container">
        <aside className="sidebar">
          <ul>   
          <Link href="/Carts/CardDetail">
              Carts
            </Link>
            <Link href="/Carts/CartsDetails/Productos">
              Products
            </Link>
            <li>New Carts</li>
            <li>New products</li>
          </ul>
        </aside>

        <main className="content">
          {children}
        </main>
      </div>

      <footer>
        <p>Desarrollado por: Jessica Niño 2023</p>
      </footer>
    </div>
  )
}