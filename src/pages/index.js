import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import image01 from '../assets/images/image01.jpg'
import image02 from '../assets/images/image02.jpg'
import image03 from '../assets/images/image03.jpg'
import image04 from '../assets/images/image04.jpg'
import image05 from '../assets/images/image05.jpg'
import image06 from '../assets/images/image06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet>
                    <title>Joe Coyle | Financial Consultant</title>
                    <meta name="description" content="Homepage" />
                    <script id="cc-cpc116-loader"
                        src="https://cpc116api.clearchoice.ie/asset/js/3e5265d713973fa50354bb29b48b79a2_JSP"
                        apiKey="dce27720-7375-11ea-8a76-03915609c934">
                    </script>
                </Helmet>


                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${image01})`}}>
                            <header className="major">
                                <h3>Advice</h3>
                                <p>Financial planning and advice</p>
                            </header>
                            <Link to="/advice" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${image02})`}}>
                            <header className="major">
                                <h3>Our Agencies</h3>
                                <p>Agencies we work with</p>
                            </header>
                            <Link to="/agencies" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${image03})`}}>
                            <header className="major">
                                <h3>Our Fees</h3>
                                <p>Fee information</p>
                            </header>
                            <Link to="/fees" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${image04})`}}>
                            <header className="major">
                                <h3>Privacy Statement</h3>
                                <p>Privacy is important to us</p>
                            </header>
                            <Link to="/privacy" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${image05})`}}>
                            <header className="major">
                                <h3>Why Choose Us</h3>
                                <p>Experience, impartiality, integrity</p>
                            </header>
                            <Link to="/choose" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${image06})`}}>
                            <header className="major">
                                <h3>My Story so Far</h3>
                                <p>Proven track record</p>
                            </header>
                            <Link to="/story" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Do You Need our Services? Ask Yourself</h2>
                            </header>
                            <div className="grid-wrapper">
                                <div className="col-6">
                                    <header className="major">
                                        <h3>Protection</h3>
                                    </header>
                                    <h4>In the event of my death, will...</h4>
                                    <ul className="alt">
                                        <li>My debts be paid off?</li>
                                        <li>My Income continue, reduce or cease?</li>
                                        <li>My children’s education be paid for?</li>
                                        <li>My business /business partner be protected?</li>
                                        <li>My children have inheritance tax to pay?</li>
                                    </ul>
                                    <h4>If I become seriously ill, will…</h4>
                                    <ul className="alt">
                                        <li>I have the funds to cover medical expenses, debt repayment, Income replacement , convalescence etc.?</li>
                                    </ul>
                                    <h4>If I suffer long term disability, will…</h4>
                                    <ul className="alt">
                                        <li>My income continue, reduce or stop?</li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <header className="major">
                                        <h3>Retirement Planning</h3>
                                    </header>
                                    <h4>Tax effective planning for self-employed, company directors or employees</h4>
                                    <ul className="alt">
                                        <li>At what age do I want to retire?</li>
                                        <li>What income will I need?</li>
                                        <li>Where will that income come from?</li>
                                        <li>How do I fund for the shortfall?</li>
                                    </ul>
                                    <header className="major">
                                        <h3>Savings & Investments</h3>
                                    </header>
                                    <ul className="alt">
                                        <li>Do I save regularly to provide for a house deposit, children’s education, retirement etc.?</li>
                                        <li>Do I have money Invested or on deposit?</li>
                                        <li>Do I know what my appetite for risk is?</li>
                                    </ul>
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
    }
}

export default HomeIndex
