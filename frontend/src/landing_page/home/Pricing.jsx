import React from 'react'

function Pricing() {
  return (  
    <>
    <div className="container mt-5">
      <div className="row">

        <div className="col-5 mb-5 mt-4">
          <h2>Unbeatable pricing</h2> 
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and  no hidden charges.</p>
          <a className=' see-pricing mx-2' href="/">See picing <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div className="col mb-5">
          <div className="row prices">
            <div className="col-3  prices">
              <img src="./images/price1.svg" alt="price1" />
              <div className='txt-price'>
              <p  className='price-txt '>Free account opening</p>
              </div>
             
            </div>
            <div className="col-3  prices">
            <img src="./images/price2.svg" alt="price2" />
            <div className='txt-price'>
            <p className='price-txt'>Direct mutual funds</p>
            </div>
            
            </div>
            <div className="col-3  prices">
            <img src="./images/price3.svg" alt="price3" />
            <div className='txt-price'>
            <p  className='price-txt'>Intraday and F&O</p>
            </div>
           
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default Pricing;