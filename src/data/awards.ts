import type { AwardItem } from '../types'

export const awards: AwardItem[] = [
  {
    medal: 'gold',
    title: { en: 'Gold Medal', id: 'Medali Emas' },
    event: 'Software Development Division – Gemastik XVIII',
    year: 2025,
    image: '/portfolio/images/awards/sertif_gemas.jpg',
  },
  {
    medal: 'gold',
    title: { en: '1st Place', id: 'Juara 1' },
    event: 'BRIN AIDeaNation',
    year: 2025,
  },
  {
    medal: 'special',
    title: { en: 'Top 50', id: 'Top 50' },
    event: 'Social Project Program – Innovillage',
    year: 2025,
  },
  {
    medal: 'bronze',
    title: { en: 'Bronze Medal', id: 'Medali Perunggu' },
    event: 'Youth Scientific Work – WISPO (World Innovative Science Project Olympiad)',
    year: 2023,
  },
]
