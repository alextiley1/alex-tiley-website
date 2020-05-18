import React from 'react'
import Scrollspy from 'react-scrollspy'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Scroll from '../components/Scroll'
import overLayPic from '../assets/images/overlay.png'

const sections = [
  { id: 'one', bg: require('../assets/images/mw.jpg') },
  { id: 'two', bg: require('../assets/images/vy.jpg') },
  { id: 'three', bg: require('../assets/images/bea.jpg') },
  { id: 'four', bg: require('../assets/images/w.jpg') },
  { id: 'footer', bg: require('../assets/images/b2.jpg') }
]
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Who I am</h2>
          </header>
          <p>
            I am a hard working, transparent, honest and dedicated team player in the work environment.
            <br />
            <br /> As team leader in my previous position at MIP, I was good at motivating my team, and leading by example, with belief in a strong
            work ethic. I am ambitious, competitive and always looking for learning opportunities. I am at my best when faced with new challenges
            within my field.
            <br />
            <br /> As a developer at SovTech, I was constantly being challenged with new problems to solve with new technologies. <br />
            <br /> I recently founded my own company, Appsolutely. It has been a dream of mine for a very long time. I build standalone projects in my proficient tech stack for clients, and contract for companies too. <br />
            <br />I am always friendly, polite and professional.
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Stuff I do</h2>
          </header>
          <p>These are a few of my main interests that keep me busy.</p>
          <ul className="icons-grid">
            <li>
              <h3>App Development</h3>
            </li>
            <li>
              <h3>Web Development</h3>
            </li>
            <li>
              <h3>Photography</h3>
            </li>
            <li>
              <h3>IOT</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Skills I have</h2>
          </header>
          <p>These are a few of the skills I have picked up over the years</p>
          <ul className="alt">
            <li>
              <h3>HTML, JS & CSS</h3>
              <p>HTML, Javascript and Css form the base of the hybrid mobile apps development and web development that I develop.</p>
            </li>
            <li>
              <h3>Cordova</h3>
              <p>
                Cordova is the wrapper that allows the HTML, Javascript and CSS to run natively on a mobile device. I developed a good understanding
                of Cordova through mobile app writing, and regularly use the command line tools.
              </p>
            </li>
            <li>
              <h3>NodeJS</h3>
              <p>
                I generally use Node when testing to spin up small local servers to connect my applications to if there is no real backend yet for
                them to connect to, and have a good understanding of how it works.
              </p>
            </li>
            <li>
              <h3>Angular 2 & Ionic</h3>
              <p>I have completed a Udemy course on Angular 2 and am currently learning how to integrate Angular into mobile apps using Ionic.</p>
            </li>
            <li>
              <h3>Bash</h3>
              <p>
                I have a good understanding of the Bash scripting from using a Linux operating system and writing Bash scripts to automate various
                processes.
              </p>
            </li>
            <li>
              <h3>Git</h3>
              <p>
                I have used GIT repositories extensively with my mobile app projects. I can use GIT via the command line, or a GUI interface like Fork
                or SourceTree. I have a good understanding of repositories, branches, commits, pipelines and push/pull requests. I have used GitHub,
                ButBucket and GitLab.
              </p>
            </li>
            <li>
              <h3>Jira</h3>
              <p>I have used Jira extensively to track issues.</p>
            </li>
            <li>
              <h3>Java</h3>
              <p>I studied Java at Van Zyl and Prichard and am proficient.</p>
            </li>
            <li>
              <h3>React JS</h3>
              <p>
                During my time at SovTech I have used React as the frontend Javascript Framework for the applications I have built, these have been
                progressive, responsive web applications (PWA), I have been mainly using Typescript with React instead of pure JS.
              </p>
            </li>
            <li>
              <h3>React Native</h3>
              <p>
                I have investigated React Native and skilled up on it when joining SovTech, I have recently created another small app as a refresher
                and am currently in the process of publishing it.
              </p>
            </li>
            <li>
              <h3>AWS</h3>
              <p>
                I have used many AWS services including Cognito, DynamoDB (using GraphQL to CRUD data), Lambda, CloudFront, I generally use these
                behind Amplify. I have also investigated services such as Rekognition and Transcribe offered by AWS.
              </p>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>One last thing</h2>
        </header>
        <p>All of the photos on this site were taken by me :)</p>
      </div>
      <Footer />
    </section>

    <Scrollspy items={sections.map(s => s.id)} currentClassName="active" offset={50} componentTag={'div'}>
      {sections.map(s => {
        return <div key={s.id} className="main-bg" id={`${s.id}-bg`} style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }} />
      })}
    </Scrollspy>
  </Layout>
)

export default IndexPage
