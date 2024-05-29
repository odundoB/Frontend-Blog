import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-primary mr-2">Home</Link>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>

      <h1 className="display-4 text-center my-4">Discover White Automotive</h1>
      <p className="lead text-center mb-4">Finding a reliable automotive partner can be a challenging task, but White Automotive stands out as a beacon of trust, quality, and excellence. Located in the heart of the city, White Automotive offers a unique blend of modern automotive technology and personalized service. Whether you’re a car enthusiast, a family in need of a reliable vehicle, or someone looking for expert automotive care, White Automotive has something special to offer.</p>
      
      <div className="row">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600" alt="White Car in Showroom" className="img-fluid rounded mb-4" />
        </div>
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="White SUV on Road" className="img-fluid rounded mb-4" />
        </div>
      </div>
    </div>
  );
}

export default Home;
