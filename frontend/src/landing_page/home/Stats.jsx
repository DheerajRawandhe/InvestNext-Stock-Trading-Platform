import React from 'react'

function Stats() {
  return (  
    <>
    
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5">
          <h2 className='mt-5'>Trust with confidence</h2>
          <h5 className='mt-4'>Customer-first always</h5>
          <p className='mt-2 text-muted '>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.  </p>

          <h5 className='mt-4'>No spam or gimmicks</h5>
          <p className='mt-2  text-muted '>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

          <h5 className='mt-4'>The Zerodha universe</h5>
          <p className='mt-2  text-muted '>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.  </p>

          <h5 className='mt-4'>Do better with money</h5>
          <p className='mt-2  text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.  </p>
        </div>

        <div className="col-6 mt-5 ">
          <img className='eco-img' src="./images/ecosystem.png" alt="ecosystem-img" />
          <div className='explore mx-5 '>
          <a className=' mx-5' href="/">Explore our products <i class="fa-solid fa-arrow-right"></i> </a> 
          <a href="/">Try Kite demo <i class="fa-solid fa-arrow-right"></i> </a>  
          </div>
     
        </div>
     </div>
    </div>

    <div className='press-logo mt-5 '>
      <img className='presslogo-imgs' src="./images/pressLogos.png" alt="pressLogos" />
    </div>
   
    </>
  );
}

export default Stats;