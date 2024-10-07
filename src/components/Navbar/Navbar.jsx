import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const navigation = [
  { name: 'Show All Todos', href: '#', path : "/todo" },
  { name: 'Add Todo', href: '#', path:"/addtodo"},

]
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          
           <div className="flex lg:flex-1">
           
             
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <div>
                  
                    <Link to={item.path}><a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                      {item.name}
                    </a></Link> 
                  
                </div>

              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Navbar