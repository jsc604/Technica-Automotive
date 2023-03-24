import Link from "next/link";
import styles from './Header.module.css';
import Image from "next/image";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <Image
          src='/technicaLogo.png'
          width={150}
          height={50}
          alt='Technica Automotive Logo'
        />
      </Link>
      <div>
        <Link className={styles.button} href='/'>Detailing</Link>
        <Link className={styles.button} href='/'>Ceramic Coating</Link>
        <Link className={styles.button} href='/'>Paint Correction</Link>
        <Link className={styles.button} href='/'>Products & Gear</Link>
        <Link className={styles.button} href='/'>About</Link>
      </div>
      <Link style={{padding: 10, borderColor: "white", borderWidth: 1, borderStyle: 'solid', borderRadius: 5}} href='/'>Get A Quote</Link>
    </nav>
  )
}