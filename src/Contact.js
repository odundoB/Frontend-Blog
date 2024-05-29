import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Second Name</label>
          <input type="text" className="form-control" placeholder="Second Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-secondary ms-2">Back</Link> {/* Back button */}
      </form>
    </div>
  );
}

export default Contact;

