'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { products } from '../../lib/products';
import styles from './checkout.module.css';

function CheckoutContent() {
  const params = useSearchParams();
  const addId = params.get('add') ? parseInt(params.get('add'), 10) : null;
  const product = addId ? products.find(p => p.id === addId) : products[0];
  const item = product || products[0];

  return (
    <>
      <section className={styles.hero}>
        <h1 className="font-script">Checkout</h1>
        <p>Review your order and pay securely with PayPal.</p>
      </section>

      <div className="main-content">
        <div className={styles.layout}>
          <div className={styles.cartItems}>
            <div className="card">
              <div className={styles.cartItem}>
                <img src={item.img} alt={item.name} />
                <div className={styles.details}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.meta}>{item.label} · Qty 1</div>
                </div>
                <div className={styles.price}>R{item.price}</div>
              </div>
            </div>
          </div>

          <aside className={styles.summary}>
            <div className="card">
              <h2 className="font-script">Order Summary</h2>
              <div className={styles.row}><span>Subtotal</span><span>R{item.price}</span></div>
              <div className={styles.row}><span>Shipping</span><span>Calculated at PayPal</span></div>
              <div className={`${styles.row} ${styles.total}`}><span>Total</span><span>R{item.price}</span></div>
              <div className={styles.paypal}>
                <a href="https://www.paypal.com/checkoutnow" target="_blank" rel="noopener noreferrer" className={`btn ${styles.paypalBtn}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.72a.77.77 0 01.76-.646h6.2c2.36 0 4.22.74 5.48 2.2 1.12 1.3 1.56 2.92 1.32 4.86-.36 2.8-1.6 4.64-3.68 5.48-1.08.44-2.32.66-3.68.66H9.41l-.9 5.4a.642.642 0 01-.633.53z"/></svg>
                  Pay with PayPal
                </a>
                <p className={styles.paypalNote}>You will be redirected to PayPal to complete your payment securely.</p>
              </div>
              <Link href="/shop" className={styles.back}>&larr; Continue shopping</Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default function Checkout() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}
