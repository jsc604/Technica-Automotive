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
    </main>
  );
}
