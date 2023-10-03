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
      </body>
    </html>


  )
}