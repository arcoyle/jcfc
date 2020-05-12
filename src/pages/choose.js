import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerChoose from '../components/BannerChoose'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

//built from landing.js. removed images and reworded. replace images as needed

const Choose = (props) => (
    <Layout>
        <Helmet>
            <title>Why Choose Us</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerChoose />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <header className="major">
                                <h2>Experience</h2>
                            </header>
                            <p>We have been, directly and indirectly, helping clients provide for and protect themselves, their families and their businesses for over 32 years.</p>
                        </div>
                        <div className="col-4">
                            <header className="major">
                                <h2>Impartiality</h2>
                            </header>
                            <p>We are not tied to any bank or insurance company; we provide advice on the basis of Fair Analysis and offer clients the option to deal with us on a fee basis. We can provide a package of financial products selected from the financial service providers operating in Ireland with whom we hold agencies – see above. The choice is based solely on your requirements.</p>
                        </div>
                        <div className="col-4">
                            <header className="major">
                                <h2>Integrity</h2>
                            </header>
                            <p>Living and working locally in the North West with a track-record of delivering results for long-term clients, our success is based on our integrity and our commitment to our customers.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="inner">
                <h4>Joe Coyle Financial Consultants Ltd is regulated by the Central Bank of Ireland</h4>
            </div>

        </div>

    </Layout>
)

export default Choose
