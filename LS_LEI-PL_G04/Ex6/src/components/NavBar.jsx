import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav class="main-nav">
      <h1 class="main-title">First Event</h1>
      <Link to="/form" className="link">Register now!</Link>
      <Link to="/tickets" className="link">Buy Tickets</Link>
      <Link to="/gallery" className="link">Gallery</Link>
      <Link to="/survey" className="link">Survey</Link>
    </nav>
    )
}

export default NavBar