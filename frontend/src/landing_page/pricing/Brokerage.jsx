import React from "react";

export function Brokerage() {
  return (
    <>
      <div className="mt-5 brokerage">
        <a className="brokerage-links" href="">
          Equity
        </a>
        <a className=" brokerage-links" href="">
          Currency
        </a>
        <a className=" brokerage-links" href="">
          Commodity
        </a>
      </div>

      <table class="table brokerage-table">
        <thead>
          <tr>
            <th></th>
            <th scope="col">Equity delivery</th>
            <th scope="col">Equity intraday</th>
            <th scope="col">F&O - Futures</th>
            <th scope="col">F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Brokerage</th>
            <td>Zero Brokerage</td>
            <td>
              0.03% or Rs. 20/executed order <br /> whichever is lower
            </td>
            <td>
              0.03% or Rs. 20/executed order <br /> whichever is lower
            </td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <th scope="row">STT/CTT</th>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td>
              <li>
                0.125% of the intrinsic value on options that are bought and
                exercised
              </li>
              <li>0.1% on sell side (on premium)</li>
            </td>
          </tr>

          <tr>
            <th scope="row">Transaction charges</th>
            <td>NSE: 0.00297%</td>
            <td>NSE: 0.00297% </td>
            <td>NSE: 0.00173%</td>
            <td>NSE: 0.00173% BSE: 0</td>
          </tr>
          <tr>
            <th scope="row">STT/CTT</th>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td>0.1% on sell side (on premium)</td>
          </tr>
        </tbody>
      </table>

      <h5 className="text-center  mt-5">
        {" "}
        <a className="calcu-text" href="">
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </h5>

      <h4 className="mt-5  charges-explained">Charges explained</h4>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 charge-para">
            <h7>Securities/Commodities transaction tax</h7>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h7>Transaction/Turnover Charges</h7>
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
          </div>
          <div className="col-6 charge-para">
            <h7>GST(Goods and Services Tax)</h7>
            <p>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <h7>SEBI Charges</h7>
            <p>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h7>DP (Depository participant) charges</h7>
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <h7>Pledging charges</h7>
            <p>₹30 + GST per pledge request per ISIN.</p>
          </div>
        </div>
        <h6 className="mt-3">Disclaimer </h6>
        <p className="disclaimer-para mt-3 ">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>

      {/* -------------- Charges for account opening ------------------ */}

      <div className="mt-5">
        <h4 className="h4-head p-2 ">Charges for account opening</h4>
      </div>

      <table class="table table-account  mt-3">
        <thead>
          <tr>
            <th scope="col">Type of account</th>
            <th scope="col">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td>
              <button className="free-price">Free</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Offline account</th>
            <td>
              <button className="free-price">Free</button>
            </td>
          </tr>
          <tr>
            <th scope="row">NRI account (offline only)</th>
            <td colspan="2">₹ 500</td>
          </tr>
          <tr>
            <th scope="row">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </th>
            <td colspan="2">₹ 500</td>
          </tr>
        </tbody>
      </table>

      {/*------------------- optional Service ------------------ */}

      <div className="mt-5">
        <h4 className=" h4-head p-2">
          Charges for optional value added services
        </h4>
      </div>

      <table class="table table-account mt-3">
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Billing Frquency</th>
            <th scope="col">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Tickertape</th>
            <td> Monthly / Annual</td>
            <td> Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <th scope="row">Smallcase</th>
            <td> Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <th scope="row">Kite Connect </th>
            <td>Monthly</td>
            <td> Connect: 2000 | Historical: 2000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
