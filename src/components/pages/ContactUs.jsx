import React from "react";
import Footer from "../commons/Footer";
import Header from "../commons/Header";

function ContactUs() {
  return (
    <div>
      <Header />
      <main>
        <h1>Contact us</h1>
        <form action='post'>
          <label htmlFor='email'>
            <input type='email' name='email' id='email' />
          </label>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;
