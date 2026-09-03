'use client';

import { Camera, Expand } from 'lucide-react';
import { useState } from 'react';

import { vehicle } from '@/lib/vehicle';

type PhotoGalleryProps = { variant: 'hero' | 'grid' };

function VehiclePhoto({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={`photo-frame${missing ? ' is-missing' : ''}`}>
      {/* Native image loading allows a graceful fallback before the owner's photos exist. */}
      {/* oxlint-disable-next-line next/no-img-element */}
      {!missing && <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} onError={() => setMissing(true)} />}
      {missing && <div className="photo-placeholder"><Camera aria-hidden="true" /><span>Photo coming soon</span></div>}
    </div>
  );
}

export function PhotoGallery({ variant }: PhotoGalleryProps) {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const photos = variant === 'hero' ? vehicle.photos.slice(0, 3) : vehicle.photos;
  if (variant === 'hero') {
    return (
      <div className="hero-gallery" aria-label="Featured vehicle photos">
        {photos.map((photo, index) => <div className={`hero-photo hero-photo-${index + 1}`} key={photo.src}><VehiclePhoto {...photo} priority={index === 0} /></div>)}
        <span className="photo-count"><Camera aria-hidden="true" /> {vehicle.photos.length} photos</span>
      </div>
    );
  }
  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button className={`gallery-photo gallery-photo-${index + 1}`} key={photo.src} onClick={() => setActivePhoto(index)} aria-label={`Open photo ${index + 1}: ${photo.alt}`}>
            <VehiclePhoto {...photo} />
            <span className="expand-icon"><Expand aria-hidden="true" /></span>
          </button>
        ))}
      </div>
      {activePhoto !== null && (
        <dialog open className="lightbox" aria-label="Vehicle photo viewer" onKeyDown={(event) => event.key === 'Escape' && setActivePhoto(null)}>
          <button className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Close photo viewer">Close ×</button>
          <div className="lightbox-photo">
            <VehiclePhoto {...photos[activePhoto]} priority />
            <p>{photos[activePhoto].alt}</p>
          </div>
        </dialog>
      )}
    </>
  );
}
