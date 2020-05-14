import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAdvice from '../components/BannerAdvice'

import image07 from '../assets/images/image07.jpg'
import image08 from '../assets/images/image08.jpg'


const Advice = (props) => (
    <Layout>
        <Helmet>
            <title>Advice</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerAdvice />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>In today’s economy we understand how hard it is to create long-term financial security. It can be difficult to decide how to use your money today to provide a better future for you, your family and your business tomorrow.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>

                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Our Mission?</h3>
                            </header>
                            <p>Our mission is to help you ensure that you, your family and your business are properly protected and provided for in the event of</p>
                            <ul className="alt">
                                <li>Untimely death</li>
                                <li>Disability</li>
                                <li>Retirement</li>
                                <li>Illness</li>
                            </ul>
                            <p>and that you fully understand the products you use.</p>
                        </div>
                    </div>
                    <img src={image08} alt="" />
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Our Approach</h3>
                            </header>
                            <p>Through initial conversations with you we will establish a clear picture of your current financial circumstances and your short, medium and long-term financial goals.</p>
                            <p>We will then recommend a financial plan that outlines the steps you need to take to help you achieve those goals and aspirations.</p>
                            <p>The advice we give is entirely impartial as are the products we recommend – we offer advice on the basis of Fair Analysis of the market.</p>
                            <p>We believe that when it comes to your money, careful, disciplined planning is the best way forward.</p>
                        </div>
                    </div>
                    <img src={image07} alt="" />
                </section>
            </section>
            <div className="inner">
                <h4>Joe Coyle Financial Consultants Ltd is regulated by the Central Bank of Ireland</h4>
            </div>

        </div>

    </Layout>
)

export default Advice
