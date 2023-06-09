import Image from 'next/image';
import styles from './page.module.css';
import Button from './Button';
import SelectedButton from './providers/SelectedButton';
import PackageCard from './PackageCard';

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
          <h2 className={styles.subHeading}>About this service</h2>
          <h1 className={styles.heading}>Bridging Engineering and Detailing Excellence</h1>
          <p>
            A pursuit for perfection is evident in every project we undertake.
            Our team of skilled professionals are dedicated to providing exceptional detailing,
            paint correction, and ceramic coating solutions that bring out the true beauty of your vehicle.
            Experience the difference that comes from uniting engineering expertise with a keen eye for detail.
          </p>
        </div>
      </div>

      <div className={styles.packageContainer}>
        <h1>Our Packages</h1>
        <SelectedButton>
          <div className={styles.buttonContainer}>
            <Button title='Maintenance' />
            <Button title='Upgraded' />
            <Button title='Premium' />
          </div>
          <PackageCard />
        </SelectedButton>
      </div>
      <iframe src="https://orbisx.ca/app/booknow/VSV93?bg=%2300000" style={{borderRadius: 10, marginBottom: 20}} name="OrbisXbookingForm" id="OrbisXbookingForm" scrolling="yes" frameBorder="0" height="2000px" width="80%"></iframe>
      <iframe src="https://orbisx.ca/app/embed-greviews/VSV93" name="gReviewsEmbedCode" scrolling="yes" frameBorder="0" height="800px" width="80%"></iframe>
    </main>
  );
}
