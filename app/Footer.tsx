import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.right}>
        <li className={styles.listItems}><a href="https://www.facebook.com/TechnicaAutomotive/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook fa-2xl"></i></a></li>
        <li className={styles.listItems}><a href="https://www.instagram.com/technicautomotive/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-2xl"></i></a></li>
        <li className={styles.listItems}><a href="https://twitter.com/technicaauto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-twitter fa-2xl"></i></a></li>
      </ul>
      <ul className={styles.left}>
        <li className={styles.listItems}><a href="#">Privacy Policy</a></li>
        <li className={styles.listItems}><a href="#">Terms of Service</a></li>
        <li className={styles.listItems}><a href="#">Contact Us</a></li>
      </ul>
      <p className={styles.copyright}>&copy; 2021 Technica Automotive - All Rights Reserved</p>
    </div>
  )
}