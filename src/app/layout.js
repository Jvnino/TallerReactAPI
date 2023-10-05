import Link from 'next/link';

import './globals.css'
export default function Header({ children }) {

  return (
    <html lang="en">

      <body>
        <div className="General">
          <header>
            <h1>Consumo React API</h1>
          </header>

          <div className="container">
            <aside className="sidebar">
              <ul>
                <li>
                  <Link href="/Carts">Carts</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/addCart">New cart</Link>
                </li>
                <li>
                  <Link href="/addProduct">New product</Link>
                </li>
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
      </body>
    </html>


  )
}