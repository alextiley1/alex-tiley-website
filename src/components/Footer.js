import React from 'react'
import config from '../../config'
import packageJson from '../../package.json'

export default function Footer() {
  return (
    <footer>
      <p>Get in touch</p>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="copyright">
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>Version: {packageJson.version}</li>
      </ul>
    </footer>
  )
}
