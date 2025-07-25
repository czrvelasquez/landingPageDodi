import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <nav className="nav">
          <span className="logo">DoDi</span>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Welcome to DoDi</h1>
          <p>Your digital documentation solution</p>
          <a className="cta-button" href="#contact">Get Started</a>
        </div>
      </header>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Automation</h3>
            <p>Automate your document workflows.</p>
          </div>
          <div className="feature-item">
            <h3>Integration</h3>
            <p>Connect with popular tools.</p>
          </div>
          <div className="feature-item">
            <h3>Security</h3>
            <p>Keep your data safe.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About DoDi</h2>
        <p>
          DoDi helps you manage documentation with ease. Our platform is built
          for reliability and scalability.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DoDi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
