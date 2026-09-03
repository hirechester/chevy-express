// Update this file with the van's final details before publishing.
export const vehicle = {
  year: '2012',
  price: 'Price available soon',
  mileage: 'Mileage coming soon',
  location: 'Your city, state',
  condition: 'Used · Clean',
  summary: 'A dependable full-size work van with serious hauling capacity and plenty of life left for its next owner.',
  description: [
    'This 2012 Chevrolet Express 3500 is a capable, straightforward van ready for work, travel, or a custom build. It offers the heavy-duty foundation the Express is known for, with a spacious interior and practical access.',
    'Add your personal ownership story here—including how the van was used, what you liked about it, and why you are selling it. Clear, specific details help buyers feel confident before they reach out.',
  ],
  maintenanceIntro: 'Add a short sentence about your service history and how the van has been maintained.',
  maintenance: ['Add recent service or repair', 'Add tire and brake condition', 'Add another maintenance highlight', 'Service records available to review'],
  facts: [
    { label: 'Make', value: 'Chevrolet' }, { label: 'Model', value: 'Express 3500' },
    { label: 'Model year', value: '2012' }, { label: 'Engine', value: 'Add engine' },
    { label: 'Transmission', value: 'Add transmission' }, { label: 'Drivetrain', value: 'Add drivetrain' },
    { label: 'Body style', value: 'Full-size van' }, { label: 'VIN', value: 'Available on request' },
  ],
  notes: [
    { title: 'Title & ownership', text: 'Add title status, ownership history, and whether there is a loan or lien.' },
    { title: 'Known imperfections', text: 'Describe cosmetic wear or mechanical quirks plainly so buyers know what to expect.' },
    { title: 'Sale details', text: 'Add accepted payment methods, test-drive requirements, and any other sale terms.' },
  ],
  contactLabel: 'Contact the seller',
  contactHref: 'mailto:your-email@example.com?subject=2012%20Chevy%20Express%203500',
  photos: [
    { src: '/photos/chevy-express-1.jpg', alt: 'Front three-quarter view of the Chevrolet Express' },
    { src: '/photos/chevy-express-2.jpg', alt: 'Side view of the Chevrolet Express' },
    { src: '/photos/chevy-express-3.jpg', alt: 'Rear view of the Chevrolet Express' },
    { src: '/photos/chevy-express-4.jpg', alt: 'Driver area and dashboard' },
    { src: '/photos/chevy-express-5.jpg', alt: 'Cargo area of the Chevrolet Express' },
    { src: '/photos/chevy-express-6.jpg', alt: 'Engine bay and mechanical condition' },
  ],
} as const;
