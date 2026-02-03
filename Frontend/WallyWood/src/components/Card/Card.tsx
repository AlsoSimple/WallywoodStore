import parse from 'html-react-parser';
import styles from './Card.module.scss';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

// Card component for displaying poster preview with image, title, description and genres
interface CardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  slug?: string;
  genres?: Array<{ id: number; title: string }>;
}

export function Card(props: CardProps) {
  const { id, name, image, description, slug, genres } = props;

  return (
    <div key={id} className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        {/* Parse HTML description from API */}
        <div className={styles.description}>{parse(description)}</div>
        {genres && genres.length > 0 && (
          <p className={styles.genre}>
            Genre: {genres.map((genre) => genre.title).join(', ')}
          </p>
        
        )}
        {slug ? (
          <Link to={`/plakat/${slug}`}>
            <Button>Læs mere</Button>
          </Link>
        ) : (
          <Button>Læs mere</Button>
        )}
      </div>
    </div>
  );
}
