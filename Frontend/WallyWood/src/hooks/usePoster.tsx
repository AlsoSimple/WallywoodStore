import { useParams } from 'react-router-dom';
import { useFetch } from './Fetch';

interface Poster {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  width: number;
  height: number;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  genres?: Array<{ id: number; title: string }>;
}

// Custom hook that fetches a single poster by slug from URL parameters
export function usePoster() {
  const { slug } = useParams<{ slug: string }>();
  console.log('usePoster called with slug:', slug);
  const url = `http://localhost:3000/posters/${slug}`;
  return useFetch<Poster>(url);
}
