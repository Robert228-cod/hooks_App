import { Link, NavLink } from "react-router-dom"

export const NavBar = () => { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">UseContext</Link>
                
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <NavLink
                        className = {({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        to = "/"
                    >
                        About
                    </NavLink>

                    <NavLink
                        className = {({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        to = "/Home"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className = {({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        to = "/Login"
                    >
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
