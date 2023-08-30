import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        At Tranzilla, we're more than just an e-commerce store – we're a journey of passion and craftsmanship. Founded with a vision to , our brand story is one of determination, innovation, and a commitment to excellence.

Our Values Define Us

We believe in integrity and these values shape every product we create. With a team of dedicated experts  were driven by a customer-centric approach that goes beyond transactions – it's about building lasting relationships.

Crafted with Care

Every product in our collection is a result of meticulous attention to detail and a dedication to quality. From electronics, we ensure that each item embodies our passion for perfection.

Join our Community

At Tranzilla, we're not just a brand; we're a community united by shared values. Through Green India, we strive to make a positive impact and give back.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="d-flex flex-row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" style={{height : "200px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/software-license-icon.png" alt=""/>
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" style={{height : "200px"}} src="https://en.idei.club/uploads/posts/2023-06/thumbs/1686007224_en-idei-club-p-electronic-accessories-dizain-36.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage