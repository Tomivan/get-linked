import React from "react";
import Nav from "../components/nav/nav.component";
import GetLinked from "../components/get-linked/get-linked.component";
import IntroductionComponent from "../components/introduction/introduction.component";
import Rules from "../components/rules/rules.component";
import Footer from "../components/footer/footer.component";
import Privacy from "../components/privacy/privacy.component";
import Partners from "../components/partners/partners.component";
import Prizes from "../components/prizes/prizes.component";
import Timeline from "../components/timeline/timeline.component";
import Faq from "../components/faq/faq.component";
import Criteria from "../components/criteria/criteria.component";


const Home = () => {
    return(
        <div>
            <Nav />
            <GetLinked />
            <IntroductionComponent />
            <Rules />
            <GetLinked />
            <Criteria />
            <Faq />
            <Timeline />
            <Prizes />
            <Partners />
            <Privacy />
            <Footer />
        </div>
    )
}

export default Home;