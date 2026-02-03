import { useFetch } from '../../hooks/Fetch';
import styles from './GenreSelect.module.scss';
import { useNavigate } from 'react-router-dom';

interface Genre {
  id: number;
  title: string;
  slug: string;
}

// Genre filter list that fetches genres from API and updates URL parameters
interface GenreSelectProps {
  selectedGenre: string | null;
}

export function GenreSelect({ selectedGenre }: GenreSelectProps) {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch<Array<Genre>>('http://localhost:3000/genre');

  // Toggle genre filter by updating URL query params
  const handleClick = (slug: string) => {
    console.log('Genre clicked:', slug, 'Currently selected:', selectedGenre);
    if (selectedGenre === slug) {
      navigate('/plakater');
    } else {
      navigate(`/plakater?genre=${slug}`);
    }
  };

  if (isLoading) {
    return <p>Loading genres...</p>;
  }

  if (error) {
    return <b>Error: {error}</b>;
  }

  return (
    <aside>
      <ul className={styles.genreStyle}>
        {data?.map((item) => {
          return (
            <li 
              key={item.id} 
              onClick={() => handleClick(item.slug)}
              className={selectedGenre === item.slug ? styles.active : ''}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
