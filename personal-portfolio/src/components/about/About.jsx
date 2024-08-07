import React, { useState } from 'react'
import styles from './about.module.css'
import content from './aboutme.js'
import Tab from './Tab'
import Overview from './Overview'

const About = ({ about }) => {
  const [currentTab, setTab] = useState('Skills')

  return (
    <div
      ref={about}
      style={{ marginTop: '500px' }}
      className={styles.container}
    >
      <img
        src="/tangkay.jpg"
        alt="Kay Tang"
        className={styles.displayPicture}
      />
      <div className={styles.about}>
        <h2 className={styles.title}>About Me</h2>
        {content.aboutMe.split('\n\n').map((paragraph, index) => (
          <p className={styles.text} key={index}>
            {paragraph}
          </p>
        ))}
        <div className={styles.content}>
          <Tab name="Skills" activeTab={currentTab} setTab={setTab} />
          <Tab name="Experience" activeTab={currentTab} setTab={setTab} />
          <Tab name="Education" activeTab={currentTab} setTab={setTab} />
        </div>
        <Overview currentTab={currentTab} />
      </div>
    </div>
  )
}

export default About
