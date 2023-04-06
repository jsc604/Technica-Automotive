import styles from './page.module.css';

const PackageCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>Maintenance Interior Detail</h2>
        <ul>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
        </ul>
        <div className={styles.bottomCard}>

          <h1 className={styles.cardHeading}>$80</h1>
          <button className={styles.bookButton}>Book Now</button>
        </div>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>Maintenance Exterior Detail</h2>
        <ul>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
        </ul>
        <h1 className={styles.cardHeading}>$80</h1>
        <button className={styles.bookButton}>Book Now</button>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>Complete Maintenance Detail</h2>
        <ul>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
          <li>wash</li>
        </ul>
        <h1 className={styles.cardHeading}>$150</h1>
        <button className={styles.bookButton}>Book Now</button>
      </div>
    </div>
  )
};

export default PackageCard;