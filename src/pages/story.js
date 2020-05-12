import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerStory from '../components/BannerStory'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Story = (props) => (
    <Layout>
        <Helmet>
            <title>Story So Far</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerStory />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <ul className="alt">
                        <li><strong>1983</strong> - Graduated from UCD with B. Agri. Sc</li>
                        <li><strong>1983</strong> - Joined a Life and Pensions Brokerage</li>
                        <li><strong>1987</strong> - Joined Standard Life as Account Manager</li>
                        <li><strong>1995</strong> - Became Associate of Life Assurance Association</li>
                        <li><strong>1996</strong> - Became a Fellow of the Life Assurance Association</li>
                        <li><strong>1999</strong> - Founded Life Assurance Association in the North West</li>
                        <li><strong>2000</strong> - Became a Qualified Financial Advisor</li>
                        <li><strong>2009</strong> - Set up Joe Coyle Financial Consultants Ltd</li>
                        <li><strong>2009</strong> - Became a member of the Professional Insurance Brokers Association</li>
                        <li><strong>2010</strong> - Became Authorised by the Central Bank of Ireland as a Multi-Agency Intermediary and as a Deposit Broker</li>
                        <li><strong>2011</strong> - Member of Business Network International</li>
                        <li><strong>2012</strong> - Member of Toastmasters Intermational (Donegal Bay Speakers Club)</li>
                        <li><strong>2013</strong> - Helping you understand, use and source financial products which suit your circumstances</li>
                        <li><strong>2015</strong> - Chairman of Donegal Town Darkness into Light 2015 organising committee</li>
                        <li><strong>2016</strong> - Organised and participated in “Go4Pieta” which caused €56,000 to be raised for Pieta House North west</li>
                    </ul>
                </div>
            </section>
            <div className="inner">
                <h4>Joe Coyle Financial Consultants Ltd is regulated by the Central Bank of Ireland</h4>
            </div>
          </div>

    </Layout>
)

export default Story
