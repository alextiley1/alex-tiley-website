import React from 'react'
import Scrollspy from 'react-scrollspy'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Scroll from '../components/Scroll'
import overLayPic from '../assets/images/overlay.png'
import config from '../../config'

const sections = [
  { id: 'one', bg: require('../assets/images/mw.jpg') },
  { id: 'two', bg: require('../assets/images/vy.jpg') },
  { id: 'three', bg: require('../assets/images/b2.jpg') },
  { id: 'four', bg: require('../assets/images/w.jpg') },
  { id: 'footer', bg: require('../assets/images/vy.jpg') }
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
            I am a hard working, transparent, honest and dedicated team player in the work environment. As team leader in my previous position at MIP,
            I was good at motivating my team, and leading by example, with belief in a strong work ethic. I am ambitious, competitive and always
            looking for learning opportunities. I am at my best when faced with new challenges within my field. As a developer at in my current
            position at SovTech, I am constantly being challenged with new problems to solve with new technologies. I am always friendly, polite and
            professional.
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
              <h3>HTML</h3>
            </li>
            <li>
              <h3>JavaScript</h3>
            </li>
            <li>
              <h3>Css</h3>
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
            </li>
            <li>
              <h3>Angular 2</h3>
            </li>
            <li>
              <h3>Ionic</h3>
            </li>
            <li>
              <h3>Bash</h3>
            </li>
            <li>
              <h3>Git</h3>
            </li>
            <li>
              <h3>Jira</h3>
            </li>
            <li>
              <h3>Java</h3>
            </li>
            <li>
              <h3>ReactJS</h3>
            </li>
            <li>
              <h3>React Native</h3>
            </li>
            <li>
              <h3>AWS</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="four">
          <a href="#four" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="four" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[3].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>One more thing</h2>
          </header>
          <p>All of the photos on this site were taken my me :)</p>
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
          <h2>Get in touch</h2>
        </header>
        <ul className="icons-grid">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social
            return (
              <li key={url}>
                <a href={url} width="40px" className={`icon alt ${icon}`}>
                  <h5 className="label">{name}</h5>
                </a>
              </li>
            )
          })}
        </ul>
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
