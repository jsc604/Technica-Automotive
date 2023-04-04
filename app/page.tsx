import Image from 'next/image';
import styles from './page.module.css';
import { Inconsolata } from 'next/font/google';
import React from 'react';
import ReviewsCarousel from './ReviewsCarousel';
import Link from 'next/link';

const inconsolata = Inconsolata({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace', 'arial']
});

const placeId = "ChIJFXVnBRzDhVQRZstR0x61Pjg";
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;


async function getReviews() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }

  return res.json();
}

const Home = async () => {
  const reviews = await getReviews();

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
            <Link href='/detailing' className={styles.link}>
              <h1 className={styles.heading}>Detailing</h1>
            </Link>
            <p>
              At Technica Automotive, we believe that every vehicle deserves meticulous
              attention and care. Our expert technicians provide a full suite of auto
              detailing services, catering to the unique needs of your car. From
              thorough interior cleaning and stain removal to exterior polishing and
              paint protection, we use state-of-the-art equipment and high-quality
              products to restore your vehicle&apos;s showroom shine. Choose Technica
              Automotive and experience the transformative power of professional
              detailing that elevates your driving experience to new heights.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.left}
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80"
              alt="Sample Unsplash Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={styles.mid}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.left}
              src="https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post/original/is-ceramic-coating-better-than-applying-car-wax-6144564716152.jpg"
              alt="Sample Unsplash Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.right}>
            <Link href='/ceramic-coating' className={styles.link}>
              <h1 className={styles.heading}>Ceramic Coating</h1>
            </Link>
            <p>
              Embrace the ultimate protection for your vehicle with our advanced
              ceramic coating services. Our expert technicians meticulously apply a
              durable, hydrophobic layer that not only enhances your car&apos;s
              appearance but also shields it from environmental contaminants,
              UV rays, and minor scratches. Our high-performance ceramic coatings
              provide long-lasting protection, making it easier to maintain your
              vehicle&apos;s pristine condition while preserving its value. Trust Technica
              Automotive for ceramic coating solutions that offer unrivaled gloss and
              superior defense against the elements.
            </p>
          </div>
        </div>

        <div className={`${styles.mid}`}>
          <div className={styles.right}>
            <Link href='/paint-correction' className={styles.link}>
              <h1 className={styles.heading}>Paint Correction</h1>
            </Link>
            <p>
              Discover the transformative power of professional paint correction . Our
              skilled technicians utilize cutting-edge techniques and industry-leading
              equipment to meticulously remove swirl marks, oxidation, and light
              scratches from your vehicle&apos;s paintwork. By carefully restoring your
              car&apos;s finish to its original glory, we reveal a breathtaking depth of
              color and an unparalleled mirror-like shine. Trust Technica
              Automotive&apos;s paint correction services to rejuvenate your vehicle
              and elevate its appearance to a whole new level of perfection.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.left}
              src="https://images.unsplash.com/photo-1594097840961-411cf23dd23f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1418&q=80"
              alt="Sample Unsplash Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={styles.mid}>
          <div className={styles.reviews}>
            <div>

              <h1 className={styles.heading}>
                <i className="fa-solid fa-quote-left" style={{ fontSize: 'smaller' }}></i>
                &nbsp;Google Reviews&nbsp;
                <i className="fa-solid fa-quote-right" style={{ fontSize: 'smaller' }}></i>
              </h1>
            </div>
            <ReviewsCarousel reviewData={reviews} />
          </div>
        </div>
      </div>

      <div className={styles.top}>
        <h1 className={inconsolata.className}>
          Elevate your driving experience
          <br />
          with <span style={{ color: 'orange' }}>Technica Automotive </span>today!
        </h1>
        <button>
          <h2>Book an appointment</h2>
        </button>
      </div>
    </main>
  );
}

export default Home;