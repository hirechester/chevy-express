import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  Gauge,
  MapPin,
  MessageCircle,
  UsersRound,
} from 'lucide-react';

import { PhotoGallery } from '@/components/photo-gallery';
import { vehicle } from '@/lib/vehicle';

const overview = [
  { label: 'Year', value: vehicle.year, icon: CalendarDays },
  { label: 'Mileage', value: vehicle.mileage, icon: Gauge },
  { label: 'Location', value: vehicle.location, icon: MapPin },
  { label: 'Seating', value: vehicle.seating, icon: UsersRound },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="wordmark-mark">CE</span>
          <span>
            <strong>Chevy Express 3500</strong>
            <small>Private-party listing</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#details">Details</a>
          <a href="#photos">Photos</a>
          <a href="#contact" className="nav-contact">
            Contact seller
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">For sale · {vehicle.location}</p>
          <h1>
            {vehicle.year} Chevrolet
            <span>Express 3500</span>
          </h1>
          <p className="hero-summary">{vehicle.summary}</p>

          <div className="hero-price-row">
            <div>
              <span className="price-label">Asking price</span>
              <strong className="price">{vehicle.price}</strong>
            </div>
            <a className="primary-button" href="#contact">
              I’m interested <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <a className="scroll-link" href="#details">
            View vehicle details <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <PhotoGallery variant="hero" />
      </section>

      <section className="spec-strip" aria-label="Vehicle overview">
        {overview.map(({ label, value, icon: Icon }) => (
          <div className="spec-item" key={label}>
            <Icon aria-hidden="true" />
            <span>
              <small>{label}</small>
              <strong>{value}</strong>
            </span>
          </div>
        ))}
      </section>

      <section className="content-section intro-section" id="details">
        <div className="section-heading">
          <p className="eyebrow">The van</p>
          <h2>Room for everyone. Ready for the next trip.</h2>
        </div>
        <div className="intro-copy">
          {vehicle.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="detail-grid content-section">
        <article className="detail-card featured-card">
          <div className="card-icon">
            <UsersRound aria-hidden="true" />
          </div>
          <p className="eyebrow">Made for families</p>
          <h2>One van. The whole crew.</h2>
          <p>{vehicle.highlightIntro}</p>
          <ul className="check-list">
            {vehicle.highlights.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="detail-card facts-card">
          <p className="eyebrow">At a glance</p>
          <h2>Vehicle details</h2>
          <dl>
            {vehicle.facts.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </section>

      <section className="gallery-section" id="photos">
        <div className="content-section gallery-heading">
          <div>
            <p className="eyebrow">Take a closer look</p>
            <h2>Photos of the van</h2>
          </div>
          <p>Exterior, interior, passenger seating, and the details that matter.</p>
        </div>
        <PhotoGallery variant="grid" />
      </section>

      <section className="content-section notes-section">
        <div className="section-heading">
          <p className="eyebrow">Good to know</p>
          <h2>An honest private-party listing.</h2>
        </div>
        <div className="notes-grid">
          {vehicle.notes.map(({ title, text }) => (
            <article key={title}>
              <span className="note-rule" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Interested?</p>
            <h2>See if it fits your family.</h2>
            <p>Reach out with questions or to arrange a time to see it in Cumming.</p>
          </div>
          <div className="contact-actions">
            <a className="primary-button light-button" href={vehicle.contactHref}>
              <MessageCircle aria-hidden="true" /> {vehicle.contactLabel}
            </a>
            <small>Located in {vehicle.location}</small>
          </div>
        </div>
      </section>

      <footer>
        <p>{vehicle.year} Chevrolet Express 3500 · Private-party sale</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
