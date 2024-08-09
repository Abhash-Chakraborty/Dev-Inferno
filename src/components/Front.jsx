"use client"

import styles from './front.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

export default function Front() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  
  const [CursorVariant, setCursorVariant] = useState("default")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    // Hide loading screen after 10 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clearTimeout(timer); // Clean up the timer
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      mixBlendMode: "difference",
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
    text: {
      z: 100,
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference",
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={CursorVariant}
      />
      <div className={`${styles.front}`}>
        <nav className={`${styles.text} ${styles.navbar}`}>
          <div>
            <Image src={"./devinferno.svg"} width={50} height={50} className={styles.logo} alt='' />
          </div>
          <div className={styles.heading}>
            <h1>
              BY 
            </h1>
            <h2>
              MOZILLA FIREFOX CLUB
            </h2>
          </div>
          <div>
            <a href="https://forms.gle/qpKjyNoU5SdVeBjz6" target='blank' className={styles.button}>Register</a>
          </div>
        </nav>
        <div className={styles.threed}></div>
        <div className={styles.content}>
          <div className={styles.mainhead}>
            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.text}>DEV. Inferno</h1>
          </div>
          <div className={styles.para}>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.text}>"Dev Inferno" is a 3-hour long frontend development challenge where participants will receive a Figma Design/UI and are tasked with bringing it to life using any programming language or framework of their choice. This is a chance to showcase your frontend development skills and creativity.</p>
          </div>
          <a href="https://forms.gle/qpKjyNoU5SdVeBjz6" target='blank'>
            <div className={styles.mainbutton}>
              <button className={styles.text}>Register</button>
            </div>
          </a>
        </div>
        <div className={`${styles.footer} ${styles.text}`}>
          <footer>
            <a href="https://events.mozillafirefoxvitb.com/devinferno/Dev%20Inferno%20Instructions%20.pdf" target='blank'><button className={styles.slide}></button></a>
          </footer>
        </div>
      </div>
      {loading && (
        <div className={styles.loading}>
          <img src="devinferno.svg" className={styles.svg} alt="" />
        </div>
      )}
    </main>
  );
}
