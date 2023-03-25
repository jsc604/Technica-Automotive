import Image from 'next/image';
import styles from './page.module.css';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace', 'arial']
});

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.top}>
        <h1 className={`${inconsolata.className} ${styles.typing}`}>
          Welcome to <span style={{ color: 'orange' }}>Technica Automotive</span>
        </h1>
        <h1 className={styles.slideUp}>
          Your premier destination for
          <br />
          automotive detailing services
        </h1>
      </div>

      <div className={styles.midContainer}>
        <div className={`${styles.mid}`}>
          <div className={styles.right}>
            <h1 className={styles.line}>
              Expert Care and Protection
            </h1>
            <p>
              Experience the unparalleled attention to detail and craftsmanship that sets us apart from the rest.
              Through our comprehensive range of services, from paint correction to
              interior detailing and protective coatings, we ensure that every aspect
              of your ride receives the meticulous care it warrants.
              Trust us to rejuvenate your ride and give it the care and protection it deserves.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.left}
              src="https://images.unsplash.com/photo-1650049837038-821920beb2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80"
              alt="Sample Unsplash Image"
              width={1470}
              height={980}
              layout='responsive'
            />
          </div>
        </div>

        <div className={styles.mid}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.left}
              src="https://images.unsplash.com/photo-1577496549804-8b05f1f67338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="Sample Unsplash Image"
              width={1470}
              height={980}
              layout='responsive'
            />
          </div>
          <div className={styles.right}>
            <h1 className={styles.heading}>Bridging Engineering and Detailing Excellence</h1>
            <p>
              A pursuit for perfection is evident in every project we undertake.
              Our team of skilled professionals are dedicated to providing exceptional detailing,
              paint correction, and ceramic coating solutions that bring out the true beauty of your vehicle.
              Experience the difference that comes from uniting engineering expertise with a keen eye for detail.
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.top}>
        <h1 className={inconsolata.className}>
          Elevate your driving experience
          <br/>
          with <span style={{ color: 'orange' }}>Technica Automotive </span>today!
        </h1>
        <button>
          <h2>Book an appointment</h2>
        </button>
      </div>
    </main>
  );
}
