import React from "react";
function Hero() {
  return (
    <>
      <div className="conteiner support-contain mt-5">
        <div className="row">
          <div className="col-7 p-5">
            <h4 className="p-3  ">Support Portal</h4>
            <h4 className="p-4">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <div>
              <input
                className=" search-support p-4 mx-4"
                type="text"
                name="search"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ... "
              />
            </div>

            <div className="mt-3 ">
              <a className="mx-4" href="">
                Track account opening{" "}
              </a>
              <a className="mx-4" href="">
                {" "}
                Intraday margins{" "}
              </a>
              <a className="mx-4" href="">
                Track segment activation{" "}
              </a>
              <br />
              <div className=" mt-2">
                <a className="mx-4 " href="">
                  Kite user manual{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-5 p-4">
            <h5 className="p-5">
              <a href="">Track tickets</a>
            </h5>
            <h4>Featured</h4>
            <ol>
              <li className="mt-4 ">
                <a href="">Offer for sale (OFS) - February 2025</a>
              </li>
              <li className="mt-4 ">
                <a href=""> Latest Intraday leverages and Square-off timings</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
