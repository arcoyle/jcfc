import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAgencies from '../components/BannerAgencies'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Agencies = (props) => (
    <Layout>
        <Helmet>
            <title>Agencies</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerAgencies />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Our Agencies</h2>
                    </header>
                    <ul className="alt">
                        <li>Aviva Life & Pensions UK Limited</li>
                        <li>BCP Asset Management Ltd</li>
                        <li>Friends First Life Assurance Company Limited</li>
                        <li>Irish Life Assurance Plc</li>
                        <li>New Ireland Assurance Company Plc</li>
                        <li>Royal London Mutual Insurance Society Limited</li>
                        <li>Standard Life Assurance Company</li>
                        <li>Wealth Options Limited</li>
                        <li>Zurich Life Assurance plc</li>
                    </ul>
                    <h4>Joe Coyle Financial Consultants Ltd is regulated by the Central Bank of Ireland</h4>
                </div>
            </section>
          </div>

    </Layout>
)

export default Agencies
