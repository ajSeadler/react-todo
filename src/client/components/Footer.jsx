import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <FaPhone className="me-2" />
              1-800-EAT-SUSHI
            </p>
            <p>
              <FaEnvelope className="me-2" />
              contact@cntpns.com
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              123 Baker Street, Kewlsville NE
            </p>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#" className="me-3"><FaFacebook /></a>
              <a href="#" className="me-3"><FaTwitter /></a>
              <a href="#" className="me-3"><FaInstagram /></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Subscribe to Our Newsletter</h5>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
                <button className="btn btn-outline-light" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <span>&copy; {new Date().getFullYear()} Colin and Tony's Sushi and Pizza</span>
      </div>
    </footer>
  );
}
