function Navigation() {
    return(
        <nav className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="logo"/>
        </div>

        <ul>
          <li href="#">Home</li>
          <li href="#">Men</li>
          <li href="#">Women</li>
          <li href="#">Kids</li>
          <li href="#">sale</li>
        </ul>

        <button>Login</button>
      </nav>
    );
}

export default Navigation;