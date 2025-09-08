import React from "react";
function CreateTicket() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <h3>To create a ticket, select a relevant topic</h3>
          <div className="col-4">
            <h5>
              <i class="fa-regular fa-square-plus mt-4 "></i> Account Opening
            </h5>
            <div className="support-links mt-4">
              <a href="">Getting started</a> <br />
              <a href="">Online</a>
              <br /> <a href="">Offline</a>
              <br />
              <a href="">Charges</a>
              <br />
              <a href="">Company, Partnership and HUF</a>
              <br />
              <a href="">Non Resident Indian (NRI)</a>
            </div>
          </div>
          <div className="col-4">
            <h5>
              <i class="fa-regular fa-user mt-4 "></i> Your Zerodha Account
            </h5>
            <div className="support-links  mt-4">
              <a href="">Login credentials</a> <br />
              <a href="">Your Profile</a>
              <br />
              <a href="">Account modification and segment addition</a>
              <br />
              <a href="">CMR & DP ID</a>
              <br />
              <a href="">Nomination</a>
              <br />
              <a href="">Transfer and conversion of shares</a>
            </div>
          </div>
          <div className="col-4">
            <h5>
              <i class="fa-solid fa-chart-simple  mt-4 "></i> Trading and
              Markets
            </h5>
            <div className="support-links  mt-4">
              <a href="">Trading FAQs</a> <br />
              <a href="">Kite</a>
              <br />
              <a href="">Margins</a>
              <br />
              <a href="">Product and order types</a>
              <br />
              <a href="">Corporate actions</a>
              <br />
              <a href="">Kite features</a>
            </div>
          </div>
        </div>

        {/* ================== */}

        <div className="row mt-5">
          <div className="col-4">
            <h5>
              <i class="fa-solid fa-briefcase"></i> Funds
            </h5>
            <div className="support-links mt-4">
              <a href="">Getting started</a> <br />
              <a href="">Online</a>
              <br /> <a href="">Offline</a>
              <br />
              <a href="">Charges</a>
              <br />
              <a href="">Company, Partnership and HUF</a>
              <br />
              <a href="">Non Resident Indian (NRI)</a>
            </div>
          </div>
          <div className="col-4">
            <h5>
              <i class="fa-solid fa-circle-exclamation"></i> Console
            </h5>
            <div className="support-links  mt-4">
              <a href="">Login credentials</a> <br />
              <a href="">Your Profile</a>
              <br />
              <a href="">Account modification and segment addition</a>
              <br />
              <a href="">CMR & DP ID</a>
              <br />
              <a href="">Nomination</a>
              <br />
              <a href="">Transfer and conversion of shares</a>
            </div>
          </div>
          <div className="col-4">
            <h5>
              <i class="fa-solid fa-coins mx-2"></i> Coin
            </h5>
            <div className="support-links  mt-4">
              <a href="">Trading FAQs</a> <br />
              <a href="">Kite</a>
              <br />
              <a href="">Margins</a>
              <br />
              <a href="">Product and order types</a>
              <br />
              <a href="">Corporate actions</a>
              <br />
              <a href="">Kite features</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
