import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFees from '../components/BannerFees'

//built from landing.js. removed images and reworded. replace images as needed

const Fees = (props) => (
    <Layout>
        <Helmet>
            <title>Fees</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerFees />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Remuneration Structure</h2>
                    </header>
                    <p>Joe Coyle Financial Consultants Ltd. is remunerated by commission and other payments from product providers on the completion of business.</p>
                    <p>You may choose to pay in full for our services by means of a fee. These are listed below for life, pensions, investments and standard PRSAs. Where we receive recurring commission, this forms part of the remuneration for initial advice provided.  We reserve the right to charge additional fees if the number of hours relating to on-going advice/assistance exceeds 1 hour.</p>
                    <p>In circumstances where fees are chargeable or where you choose to pay in full for our service by fee, we will notify you in writing in advance and agree the scale of fees to be charged if different from fees outlined below.</p>
                    <p>If we receive commission from a product provider, this may be offset against the fee which we will charge you. Where the commission is greater than the fee due, the commission may become the amount payable to the firm unless an arrangement to the contrary is made.</p>
                </div>
            </section>
            <section id="two" >
                <div className="inner">
                      <header className="major">
                          <h3>Life, Pension & Investment – Fees</h3>
                      </header>
                      <p>You may elect to deal with us on a fee basis as follows:</p>
                      <ul className="alt">
                          <li>Financial Adviser €120.00 per hour</li>
                          <li>Administration staff €50.00 per hour</li>
                      </ul>
                </div>
                  <div className="inner">
                      <header className="major">
                          <h3> Standard Personal Retirement Savings Accounts (PRSA) – Fees</h3>
                      </header>
                      <p>Where advice is requested for PRSAs, the following fees will apply:</p>
                      <ul className="alt">
                          <li>Financial Adviser €120.00 per hour</li>
                          <li>Administration staff €50.00 per hour</li>
                      </ul>
                  </div>
            </section>
            <section id="one">
                <div className="inner">
                    <p>Additional fees may be payable for complex cases and for outlays incurred. Where the fee differs from that outlined above we will notify you in advance and agree the scale of fees to be charged.</p>
                </div>
            </section>
            <div className="inner">
                <h4>Joe Coyle Financial Consultants Ltd is regulated by the Central Bank of Ireland</h4>
            </div>

        </div>

    </Layout>
)

export default Fees
