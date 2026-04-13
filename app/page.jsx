import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Rapha Self-Care – Luxury Massage Candles & Body Care',
};

export default function Home() {
  return (
    <section className={`hero shimmer-bg ${styles.hero}`}>
      <div className={styles.heroContent}>
        <h1 className="font-script">Handcrafted candles, bath rituals &amp; body care</h1>
        <Link href="/shop" className="btn">Shop Now &gt;</Link>
      </div>
    </section>
  );
}
