import Front from "@/components/Front"
import Spline from '@splinetool/react-spline/next';
import styles from './page.module.css'

export default function Home() {

  return (
    <main>
      <Front />
      <div className={`${styles.back}`}>
        <Spline
          scene="https://prod.spline.design/3WLyampJsa3B2kbF/scene.splinecode" 
        />
        <video id="ticketBackground" src="bg.webm" autoPlay loop muted preload='none' className={`${styles.video}`} />
      </div>
    </main>
  );
}
