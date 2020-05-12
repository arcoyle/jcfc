import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="jcfc.ie"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Advice</h3>
                                <p>Financial planning and advice</p>
                            </header>
                            <Link to="/advice" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Our Agencies</h3>
                                <p>Agencies we work with</p>
                            </header>
                            <Link to="/agencies" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Our Fees</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/fees" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Privacy Statement</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/privacy" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Why Choose Us</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/choose" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>My Story so Far</h3>
                                <p>Feugiat amet tempus</p>
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
