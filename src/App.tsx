import './App.css'
import { Comments, Comment }  from './Comments'
import { Article, LatestArticles } from './LatestArticles'
import ServiceCard from './ServiceCard'

function App() {
  return (
    <>
    <div className="services-block">
      <ServiceCard
        imagePath="search.svg"
        title="Search doctor" 
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
      <ServiceCard
        imagePath="search.svg"
        title="Search doctor" 
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
      <ServiceCard
        imagePath="search.svg"
        title="Search doctor" 
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
      <ServiceCard
        imagePath="search.svg"
        title="Search doctor" 
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
      <ServiceCard
        imagePath="search.svg"
        title="Search doctor" 
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
      <ServiceCard
        imagePath="search.svg"
        title="Search doctor" 
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
    </div>
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
          "article1.png",
          "Disease detection, check up in the laboratory",
          "In this case, the role of the health laboratory is very important to do a disease detection..."
        ),
        new Article(
          "article1.png",
          "Disease detection, check up in the laboratory",
          "In this case, the role of the health laboratory is very important to do a disease detection..."
        ),
        new Article(
          "article1.png",
          "Disease detection, check up in the laboratory",
          "In this case, the role of the health laboratory is very important to do a disease detection..."
        ),
        new Article(
          "article1.png",
          "Disease detection, check up in the laboratory",
          "In this case, the role of the health laboratory is very important to do a disease detection..."
        ),
        new Article(
          "article1.png",
          "Disease detection, check up in the laboratory",
          "In this case, the role of the health laboratory is very important to do a disease detection..."
        ),
      ]
    }/>
    </>
  )
}


export default App

