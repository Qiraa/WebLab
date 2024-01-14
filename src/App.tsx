import './App.css'

import './fonts/Mulish/Mulish-Regular.ttf'
import './fonts/Mulish/Mulish-Bold.ttf'
import './fonts/Mulish/Mulish-Light.ttf'
import './fonts/Mulish/Mulish-SemiBold.ttf'

import { Comments, Comment }  from './comments/Comments'
import Consult from './consult/Consult'
import { Article, LatestArticles } from './latest-articles/LatestArticles'
import LeadingProviders from './providers/LeadingProviders'
import Services, { Service } from './services/Services'
import Download from './download/Download'
import Header from './header/Header'
import Footer from './footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <Consult/>
    <Services
      services={
        [
          new Service(
            "search.svg",
            "Search doctor", 
            "Choose your doctor from thousands of specialist, general, and trusted hospitals"
          ),
          new Service(
            "online_pharmacy.svg",
            "Online pharmacy",
            "Buy  your medicines with our mobile application with a simple delivery system"
          ),
          new Service(
            "consultation.svg",
            "Consultation" ,
            "Free consultation with our trusted doctors and get the best recomendations"
          ),
          new Service(
            "details.svg",
            "Details info",
            "Free consultation with our trusted doctors and get the best recomendations",
          ),
          new Service(
            "emergency_care.svg",
            "Emergency care",
            "You can get 24/7 urgent care for yourself or your children and your lovely family"
          ),
          new Service(
            "tracking.svg",
            "Tracking",
            "Track and save your medical history and health data"
          )
        ]
      }
    />
    <LeadingProviders/>
    <Download/>
    <Comments comments={
      [
        new Comment(
          "avatar.png", 
          "Edward Newgate", 
          "Founder Circle", 
          "\"Our dedicated patient engagement app and " + 
          "web portal allow you to access information instantaneously (no tedeous form, long calls, " +
          "or administrative hassle) and securely\""
        ),
        new Comment(
          "avatar.png",
          "Edward Newgate",
          "Founder Circle", 
          "\"Providers enjoy the safety net of increased data monitoring and the ability to reduce in-office visits. " +
          "It\'s safe and enjoyable for providers AND patients, and is a great example of how we can use emerging " +
          "technology to deliver better quality, and more personalized care\""
        ),
        new Comment(
          "avatar.png",
          "Edward Newgate",
          "Founder Circle",
          "\"In 2022, we are looking to shake up the standard schedule of maternity care to Connected Maternity Care – " +
          "with the goal of enrolling 7,500 women by the end of 2024.\""
        ),
        new Comment(
          "avatar.png",
          "Edward Newgate",
          "Founder Circle",
          "\"The ability to perform fetal and maternal monitoring at home brings us closer to our goal to provide " +
          "hospital level services to anyone, anywhere while leveraging technology to overcome the space " + 
          "and time boundaries.\""
        ),
      ]
    }/>
    <LatestArticles articles={
      [
        new Article(
          "article1.png",
          "Disease detection, check up in the laboratory",
          "In this case, the role of the health laboratory is very important to do a disease detection..."
        ),
        new Article(
          "article2.png",
          "Herbal medicines that are safe for consumption",
          "Herbal medicine is very widely used at this time because of its very good for your health..."
        ),
        new Article(
          "article3.png",
          "Natural care for healthy facial skin",
          "A healthy lifestyle should start from now and also for your skin health. There are some..."
        ),
        new Article(
          "article1.png",
          "Disease detection, check up in the laboratory",
          "Herbal medicine is very widely used at this time because of its very good for your health..."
        ),
        new Article(
          "article2.png",
          "Herbal medicines that are safe for consumption",
          "In this case, the role of the health laboratory is very important to do a disease detection..."
        ),
        new Article(
          "article3.png",
          "Natural care for healthy facial skin",
          "A healthy lifestyle should start from now and also for your skin health. There are some..."
        ),
      ]
    }/>
    <Footer/>
    </>
  )
}


export default App

