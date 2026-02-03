import styles from './Home.module.scss';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import { useFetch } from '../../hooks/Fetch';

interface Poster {
  id: number;
  name: string;
  image: string;
  description: string;
  slug: string;
  genres?: Array<{ id: number; title: string }>;
}

// Homepage displaying hero image and 2 random poster cards
export function Home() {
  // Fetch 2 random posters for the featured section
  const url = 'http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,image,description,slug';
  const { data: movieData, isLoading, error } = useFetch<Poster[]>(url);
  console.log('Home page posters:', movieData);

  return (
    <div className={styles.home}>
        <div>
            <img className={styles.heroImg} src="/src/assets/images/curtain.jpg" alt="an image of a curtain." />
        </div>
      <Section sectionTitle="Sidste Nyt">
        <div className={styles.cardsContainer}>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {movieData?.map((movie) => (
                <Card 
                  key={movie.id}
                  id={movie.id}
                  name={movie.name}
                  image={movie.image}
                  description={movie.description}
                  slug={movie.slug}
                  genres={movie.genres}
                />
            ))}
        </div>
      </Section>
    </div>
  );
}