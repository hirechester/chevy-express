// Update this file with the van's final details before publishing.
export const vehicle = {
  year: '2012',
  price: '$12,000',
  mileage: '178,000 miles',
  location: 'Cumming, GA 30040',
  seating: '12 passengers',
  summary: 'A full-size 12-passenger van with room to bring the whole family along for school, activities, road trips, and everyday life.',
  description: [
    'This 2012 Chevrolet Express 3500 is the 12-passenger version, giving a larger family the flexibility to travel together without splitting into two vehicles. There is space for carpools, sports weekends, family trips, and all the routines that come with a busy household.',
    'With 178,000 miles and an asking price of $12,000, it offers a practical way to get serious passenger capacity. Add your personal ownership story here—including how the van was used, what you liked about it, and why you are selling it.',
  ],
  highlightIntro: 'One vehicle for the people, plans, and gear that make family life full.',
  highlights: ['Seating for up to 12 passengers', 'Bring the whole family in one vehicle', 'Ideal capacity for carpools and team activities', 'Plenty of room for longer family trips'],
  facts: [
    { label: 'Make', value: 'Chevrolet' }, { label: 'Model', value: 'Express 3500' },
    { label: 'Model year', value: '2012' }, { label: 'Engine', value: 'Add engine' },
    { label: 'Transmission', value: 'Add transmission' }, { label: 'Drivetrain', value: 'Add drivetrain' },
    { label: 'Body style', value: 'Passenger van' }, { label: 'Seating', value: '12 passengers' },
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
    { src: '/photos/chevy-express-5.jpg', alt: 'Passenger seating area of the Chevrolet Express' },
    { src: '/photos/chevy-express-6.jpg', alt: 'Engine bay and mechanical condition' },
  ],
} as const;
