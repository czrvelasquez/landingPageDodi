import React from 'react';

function Contacto() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email address" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contacto;
