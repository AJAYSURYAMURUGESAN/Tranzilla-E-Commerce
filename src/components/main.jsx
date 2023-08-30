import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3 mx-4" style={{display : "flex", justifyContent : "center", alignContent: "center"}}>
          <img
            style={{height : "500px"}}
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Card"
          />
               <div className="my-auto mx-4 p-4"  >
               <h5 className="font-weight-bold" style={{fontSize : "50px", fontFamily :"unset"}}>
                New Season Arrivals!!!</h5>
                <p style={{fontSize : "25px", fontFamily :"unset"}}>
                We present our top rated recent arrivals prestigiously
                with great offers and discounts!!! Grab it before it gets over.
              </p>
            </div>

       
      </div>
    </>
  );
};

export default Home;
