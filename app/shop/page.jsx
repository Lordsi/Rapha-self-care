'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { products } from '../../lib/products';
import styles from './shop.module.css';

const TYPES = [
  { value: 'all', label: 'All Products' },
  { value: 'candle', label: 'Candles' },
  { value: 'bath', label: 'Bath Salts' },
  { value: 'bathbomb', label: 'Bath Bombs' },
  { value: 'body', label: 'Body Butter' },
  { value: 'hair', label: 'Hair Butter' },
  { value: 'milkbath', label: 'Milk Bath' },
  { value: 'scrub', label: 'Body Scrub' },
  { value: 'lip', label: 'Lip Balm' },
  { value: 'bundle', label: 'Sets & Bundles' },
];

export default function Shop() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [minPrice, setMinPrice] = useState(120);
  const [maxPrice, setMaxPrice] = useState(3500);

  const filtered = useMemo(() =>
    products.filter(p =>
      (typeFilter === 'all' || p.type === typeFilter) &&
      p.price >= minPrice && p.price <= maxPrice
    ), [typeFilter, minPrice, maxPrice]);

  return (
    <>
      <section className={styles.banner}>
        <h1 className="font-script">Shop Our Collection</h1>
        <p>Handcrafted self-care essentials—single products and curated sets.</p>
      </section>

      <div className="main-content">
        <div className={styles.layout}>
          <aside className={styles.filters}>
            <div className={styles.filterGroup}>
              <h3 className="font-script">By Type</h3>
              <div className={styles.filterOptions}>
                {TYPES.map(t => (
                  <label key={t.value}>
                    <input type="radio" name="type" value={t.value} checked={typeFilter === t.value} onChange={() => setTypeFilter(t.value)} />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <h3 className="font-script">By Price</h3>
              <div className={styles.priceRange}>
                <input type="range" min={120} max={3500} step={50} value={minPrice} onChange={e => setMinPrice(+e.target.value)} />
                <input type="range" min={120} max={3500} step={50} value={maxPrice} onChange={e => setMaxPrice(+e.target.value)} />
                <div className={styles.priceLabels}><span>R{minPrice}</span><span>R{maxPrice}</span></div>
              </div>
            </div>
          </aside>

          <div>
            <div className={styles.grid}>
              {filtered.map(p => (
                <article key={p.id} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <div className={styles.desc}>{p.description}</div>
                    <img src={p.img} alt={p.name} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>{p.name}</div>
                    <div className={styles.type}>{p.label}</div>
                    <div className={styles.price}>R{p.price}</div>
                    <div className={styles.actions}>
                      <Link href={`/checkout?add=${p.id}`} className="btn">Add to Cart</Link>
                      {p.pdf && (
                        <a href={p.pdf} className={styles.btnPdf} target="_blank" rel="noopener noreferrer">View brochure (PDF)</a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
