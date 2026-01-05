import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Minh Chi Diep Portfolio',
    short_name: 'Minh Chi Diep',
    description: 'Portfolio of Minh Chi Diep - Full Stack Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#111827',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

