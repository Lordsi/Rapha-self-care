import styles from './gallery.module.css';
import Image from 'next/image';

export const metadata = { title: 'Gallery – Rapha Self-Care' };

const images = [
  { src: '/assets/Gallery/WhatsApp%20Image%202026-02-06%20at%2010.32.50%20AM.jpeg', alt: 'Ritual moment', caption: 'Self care ritual', wide: true },
  { src: '/assets/Gallery/WhatsApp%20Image%202026-02-06%20at%2010.32.50%20AM%20(1).jpeg', alt: 'Bath ritual', caption: 'Bath ritual' },
  { src: '/assets/Gallery/WhatsApp%20Image%202026-02-06%20at%2010.32.50%20AM%20(2).jpeg', alt: 'Body care', caption: 'Body care' },
  { src: '/assets/Gallery/WhatsApp%20Image%202026-02-06%20at%2010.32.50%20AM%20(3).jpeg', alt: 'Candle glow', caption: 'Glow' },
  { src: '/assets/Gallery/WhatsApp%20Image%202026-02-06%20at%2010.32.51%20AM.jpeg', alt: 'Relaxation', caption: 'Relaxation' },
  { src: '/assets/Gallery/zesty%20bloom.jpeg', alt: 'Zesty Bloom', caption: 'Self-care moment', wide: true },
];

export default function Gallery() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className="font-script">In the Moment</h1>
        <p>Our products in use—candlelit rituals, bath soaks, and everyday self-care moments.</p>
      </section>

      <div className={styles.grid}>
        {images.map((img) => (
          <div key={img.src} className={`${styles.item} ${img.wide ? styles.wide : ''}`}>
            <img src={img.src} alt={img.alt} />
            <span className={styles.caption}>{img.caption}</span>
          </div>
        ))}
      </div>

      <p className={styles.note}>Your product moments, beautifully captured.</p>
    </>
  );
}
