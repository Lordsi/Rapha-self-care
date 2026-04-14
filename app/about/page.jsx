'use client';
import { useState } from 'react';
import styles from './about.module.css';

const productData = {
  'citrus-ember':        { title: 'Citrus Ember',        subtitle: 'Soy Candle',                          img: '/assets/Products/rapha_citrus_ember_organic_1/0.jpg',                          effects: 'Energising and uplifting. Warm citrus blend invigorate the senses; melted wax doubles as massage oil.',                                                                                                                ingredients: 'Soy wax, sweet orange essential oil, bergamot, ginger. Phthalate-free.' },
  'obsidian-smoke':      { title: 'Obsidian Smoke',      subtitle: 'Soy Candle',                          img: '/assets/Products/rapha_obsidian_smoke_organic_1/0.jpg',                        effects: 'Calming and grounding. Smoky woody scent quiets the mind. Ideal for evening wind-down.',                                                                                                                                    ingredients: 'Soy wax, cedarwood, vetiver, smoke accord. Free from parabens and synthetic dyes.' },
  'velvet-rouge':        { title: 'Velvet Rouge',        subtitle: 'Soy Candle',                          img: '/assets/Products/rapha_velvet_rouge_premium_organic_1/0.jpg',                  effects: 'Romantic and warming. Rich floral scent promotes relaxation; melted wax is a luxurious body oil.',                                                                                                                           ingredients: 'Soy wax, rose absolute, geranium, sandalwood.' },
  'sacred-earth':        { title: 'Sacred Earth',        subtitle: 'Herbal Growth Hair Butter (Patchouli)',img: '/assets/Products/rapha_hair_butter_premium_organic_1/0.jpg',                  effects: 'Nourishes scalp and strengthens hair root to tip. Castor oil and herb-infused olive oil support growth; tea tree and aloe soothe. Patchouli with soft musk. Best for dry scalp, breakage, protective styling.',           ingredients: 'Castor oil; herb-infused olive oil with clove, rosemary, amla, neem, moringa; tea tree; aloe vera; patchouli.' },
  'mocha-whisper':       { title: 'Mocha Whisper',       subtitle: 'Cocoa Herbal Hair Butter',            img: '/assets/Products/rapha_mocha_whisper_organic_1/0.jpg',                          effects: 'Deeply conditions and seals moisture. Softens strands, enhances shine, improves manageability. Warm cocoa fragrance. Best for thick, dry, or damaged hair.',                                                              ingredients: 'Natural butters, herb-infused oils, warm cocoa and musk.' },
  'golden-silk':         { title: 'Golden Silk',         subtitle: 'Body Butter (Mango)',                 img: '/assets/Products/rapha_golden_silk_organic_1/0.jpg',                            effects: 'Rich yet airy. Vitamins and niacinamide support a smoother complexion. Juicy mango, cooling peppermint, soft musk. Best for daily moisture.',                                                                               ingredients: 'Shea and mango butter, vitamins, niacinamide, mango/peppermint/musk.' },
  'zesty-bloom':         { title: 'Zesty Bloom',         subtitle: 'Body Butter (Grapefruit)',            img: '/assets/Products/rapha_zest_bloom_organic_1/0.jpg',                             effects: 'Whipped shea and mango with aloe vera and hyaluronic acid. Bright grapefruit, cool peppermint, white musk. Best for dry, dull skin.',                                                                                      ingredients: 'Shea and mango butter, botanical oils, aloe vera, hyaluronic acid, grapefruit/peppermint/white musk.' },
  'sunset-essence':      { title: 'Sunset Essence',      subtitle: 'Bath Salts (Lavender Relaxation)',    img: '/assets/Products/rapha_sunset_essence_organic_1/0.jpg',                         effects: 'Eases tension and quiets the mind. Lavender botanicals and essential oil; soft fruity-peach notes with clean musk. Best for evening baths.',                                                                                 ingredients: 'Mineral salts, lavender botanicals and essential oil, peachy and musk notes.' },
  'sweet-serenity-salts':{ title: 'Sweet Serenity',      subtitle: 'Bath Salts (Chamomile Calm)',         img: '/assets/Products/rapha_sweet_serenity_organic_1/0.jpg',                         effects: 'Chamomile soothes irritation; mineral salts detox and soften. Warm vanilla wraps the floral heart. Best for sensitive skin.',                                                                                               ingredients: 'Chamomile, mineral salts, vanilla and floral notes.' },
  'zesty-wood-salts':    { title: 'Zesty Wood',          subtitle: 'Bath Salts (Rose Glow)',              img: '/assets/Products/rapha_zesty_wood_premium_organic_lifestyle_1/0.jpg',           effects: 'Rose petals and essential oil; mineral salts detoxify. Hint of grapefruit and delicate musk. Best for self-care rituals.',                                                                                                  ingredients: 'Rose petals and essential oil, mineral salts, grapefruit, musk.' },
  'milk-zesty-wood':     { title: 'Zesty Wood',          subtitle: 'Milk Bath (Rose)',                    img: '/assets/Products/rapha_zesty_wood_premium_organic_lifestyle_1/0.jpg',           effects: 'Silky soak with milk powder, clays and oils. Romantic rose lifted by citrus, soft musk. Best for dry, sensitive skin.',                                                                                                     ingredients: 'Milk powder, clays, nourishing oils, rose with citrus and musk.' },
  'milk-sunset-essence': { title: 'Sunset Essence',      subtitle: 'Milk Bath (Lavender)',                img: '/assets/Products/rapha_sunset_essence_premium_organic_lifestyle_1/0.jpg',       effects: 'Salts, milk and clay detox while maintaining hydration. Lavender with soft fruity notes. Best for bedtime routines.',                                                                                                          ingredients: 'Salts, milk, clay, lavender and soft fruity notes.' },
  'milk-sweet-serenity': { title: 'Sweet Serenity',      subtitle: 'Milk Bath (Chamomile)',               img: '/assets/Products/rapha_sweet_serenity_premium_organic_lifestyle_1/0.jpg',       effects: 'Gentle soak for irritated or sensitive skin. Soft vanilla and chamomile fragrance. Best for calming self-care.',                                                                                                              ingredients: 'Calming milk-bath base, vanilla and chamomile.' },
  'enchanted-garden':    { title: 'Enchanted Garden',    subtitle: 'Bath Bomb (Lavender & Vanilla)',      img: '/assets/Products/WhatsApp%20Image%202026-03-29%20at%202.56.44%20PM.jpeg',       effects: 'Releases soothing lavender oils and skin-conditioning ingredients. Vanilla and musk for a peaceful soak.',                                                                                                                       ingredients: 'Lavender oils, skin-conditioning ingredients, vanilla and musk.' },
  'rose-velvet-dream':   { title: 'Rose Velvet Dream',   subtitle: 'Bath Bomb (Rose & Vanilla)',          img: '/assets/Products/WhatsApp%20Image%202026-03-29%20at%202.57.11%20PM.jpeg',       effects: 'Nourishing oils, soft butters and gentle cleansers. Rose and vanilla on a soft musky base.',                                                                                                                                  ingredients: 'Nourishing oils, soft butters, gentle cleansers, rose/vanilla/musk.' },
  'brewed-bliss':        { title: 'Brewed Bliss',        subtitle: 'Body Scrub (Coffee, Peppermint & Lavender)', img: '/assets/Products/rapha_scrub_stack_organic_1/0.jpg',                     effects: 'Coffee granules improve circulation and texture; rich oils nourish deeply. Best for rough skin and fatigue.',                                                                                                                   ingredients: 'Coffee granules, peppermint, lavender, nourishing oils.' },
  'musked-citrus-glow':  { title: 'Musked Citrus Glow',  subtitle: 'Body Scrub (Turmeric & Lemongrass)',  img: '/assets/Products/rapha_musked_citrus_glow_organic_1/0.jpg',                     effects: 'Turmeric and oils promote a natural glow; lemongrass adds fresh scent. Best for dull skin and uneven tone.',                                                                                                                  ingredients: 'Turmeric, nourishing oils, lemongrass, musk and citrus.' },
  'berry-cool':          { title: 'Berry Cool',          subtitle: 'Lip Balm (Cranberry & Mint)',         img: '/assets/Products/rapha_cranberry_berrycool_organic_lifestyle_1/0.jpg',          effects: 'Shea butter and beeswax; cucumber soothes, peppermint cools. Sweet cranberry for a fresh, juicy finish.',                                                                                                                    ingredients: 'Shea butter, beeswax, cucumber extract, peppermint, sweet cranberry.' },
};

const triggers = [
  { id: 'citrus-ember',         name: 'Citrus Ember',       type: 'Soy Candle',    img: '/assets/Products/rapha_citrus_ember_organic_1/0.jpg' },
  { id: 'obsidian-smoke',       name: 'Obsidian Smoke',     type: 'Soy Candle',    img: '/assets/Products/rapha_obsidian_smoke_organic_1/0.jpg' },
  { id: 'velvet-rouge',         name: 'Velvet Rouge',       type: 'Soy Candle',    img: '/assets/Products/rapha_velvet_rouge_premium_organic_1/0.jpg' },
  { id: 'sacred-earth',         name: 'Sacred Earth',       type: 'Hair Butter',   img: '/assets/Products/rapha_hair_butter_premium_organic_1/0.jpg' },
  { id: 'mocha-whisper',        name: 'Mocha Whisper',      type: 'Hair Butter',   img: '/assets/Products/rapha_mocha_whisper_organic_1/0.jpg' },
  { id: 'golden-silk',          name: 'Golden Silk',        type: 'Body Butter',   img: '/assets/Products/rapha_golden_silk_organic_1/0.jpg' },
  { id: 'zesty-bloom',          name: 'Zesty Bloom',        type: 'Body Butter',   img: '/assets/Products/rapha_zest_bloom_organic_1/0.jpg' },
  { id: 'sunset-essence',       name: 'Sunset Essence',     type: 'Bath Salts',    img: '/assets/Products/rapha_sunset_essence_organic_1/0.jpg' },
  { id: 'sweet-serenity-salts', name: 'Sweet Serenity',     type: 'Bath Salts',    img: '/assets/Products/rapha_sweet_serenity_organic_1/0.jpg' },
  { id: 'zesty-wood-salts',     name: 'Zesty Wood',         type: 'Bath Salts',    img: '/assets/Products/rapha_zesty_wood_premium_organic_lifestyle_1/0.jpg' },
  { id: 'milk-zesty-wood',      name: 'Zesty Wood',         type: 'Milk Bath',     img: '/assets/Products/rapha_zesty_wood_premium_organic_lifestyle_1/0.jpg' },
  { id: 'milk-sunset-essence',  name: 'Sunset Essence',     type: 'Milk Bath',     img: '/assets/Products/rapha_sunset_essence_premium_organic_lifestyle_1/0.jpg' },
  { id: 'milk-sweet-serenity',  name: 'Sweet Serenity',     type: 'Milk Bath',     img: '/assets/Products/rapha_sweet_serenity_premium_organic_lifestyle_1/0.jpg' },
  { id: 'enchanted-garden',     name: 'Enchanted Garden',   type: 'Bath Bomb',     img: '/assets/Products/WhatsApp%20Image%202026-03-29%20at%202.56.44%20PM.jpeg' },
  { id: 'rose-velvet-dream',    name: 'Rose Velvet Dream',  type: 'Bath Bomb',     img: '/assets/Products/WhatsApp%20Image%202026-03-29%20at%202.57.11%20PM.jpeg' },
  { id: 'brewed-bliss',         name: 'Brewed Bliss',       type: 'Body Scrub',    img: '/assets/Products/rapha_scrub_stack_organic_1/0.jpg' },
  { id: 'musked-citrus-glow',   name: 'Musked Citrus Glow', type: 'Body Scrub',    img: '/assets/Products/rapha_musked_citrus_glow_organic_1/0.jpg' },
  { id: 'berry-cool',           name: 'Berry Cool',         type: 'Lip Balm',      img: '/assets/Products/rapha_cranberry_berrycool_organic_lifestyle_1/0.jpg' },
];

export default function About() {
  const [modal, setModal] = useState(null);
  const p = modal ? productData[modal] : null;

  return (
    <>
      <section className={styles.hero}>
        <h1 className="font-script">About Us</h1>
        <p className={styles.sub}>We believe in the power of natural ingredients and mindful rituals to nurture your skin and spirit.</p>
      </section>

      <div className="main-content">
        <p className={styles.intro}>Rapha Self-Care crafts luxurious massage candles, mineral bath soaks, milk baths, hair and body butters with carefully chosen botanicals and essential oils. Each product is designed to support relaxation, hydration, and a moment of calm.</p>

        <section className={styles.productsSection}>
          <h2 className="font-script">Meet Our Products</h2>
          <p className={styles.hint}>Click a product to discover its ingredients and effects.</p>
          <div className={styles.triggers}>
            {triggers.map(t => (
              <button key={`${t.id}-${t.type}`} className={styles.trigger} onClick={() => setModal(t.id)}>
                <img src={t.img} alt={t.name} />
                <div className={styles.triggerName}>{t.name}</div>
                <div className={styles.triggerType}>{t.type}</div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {p && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className={styles.modalCard}>
            <button className={styles.close} onClick={() => setModal(null)} aria-label="Close">&times;</button>
            <img className={styles.modalImg} src={p.img} alt={p.title} />
            <div className={styles.modalBody}>
              <h3 className={`font-script ${styles.modalTitle}`} id="modal-title">{p.title}</h3>
              <p className={styles.modalSubtitle}>{p.subtitle}</p>
              <div className={styles.modalSection}><h4>Effects &amp; Benefits</h4><p>{p.effects}</p></div>
              <div className={styles.modalSection}><h4>What It&apos;s Made Of</h4><p>{p.ingredients}</p></div>
              <a href="/shop" className="btn">Shop This Product &gt;</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
