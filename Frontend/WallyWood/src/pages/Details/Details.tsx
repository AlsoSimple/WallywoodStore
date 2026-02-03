import { Section } from '../../components/Section/Section';
import { PurchaseBox } from '../../components/PurchaseBox/PurchaseBox';
import { GenreSelect } from '../../components/GenreSelect/GenreSelect';
import { usePoster } from '../../hooks/usePoster';
import { useSearchParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './Details.module.scss';
import parse from 'html-react-parser';

// Poster details page showing full information, specs, and purchase options
export function Details() {
  const [searchParams] = useSearchParams();
  const selectedGenre = searchParams.get('genre');
  // Fetch poster data using slug from URL
  const { data: poster, isLoading, error } = usePoster();
  console.log('Poster details:', poster);

  if (isLoading) {
    return (
      <div className={styles.details}>
        <Section sectionTitle="">
          <p>Loading...</p>
        </Section>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.details}>
        <Section sectionTitle="">
          <p>Error: {error}</p>
        </Section>
      </div>
    );
  }

  if (!poster) {
    return (
      <div className={styles.details}>
        <Section sectionTitle="">
          <p>Poster ikke fundet</p>
        </Section>
      </div>
    );
  }

  return (
    <div className={styles.details}>
      <Section sectionTitle="Plakater">
        <div className={styles.contentWrapper}>
          <aside className={styles.sidebar}>
            <h3>Genre</h3>
            <GenreSelect selectedGenre={selectedGenre} />
          </aside>
          
          <figure className={styles.posterDetails}>
            <div className={styles.imageContainer}>
              <img src={poster.image} alt={poster.name} />
            </div>
            
            <figcaption className={styles.info}>
              <h2>{poster.name}</h2>
              
              <div className={styles.description}>
                {parse(poster.description)}
              </div>
              
              <div className={styles.specifications}>
                <p><strong>Størrelse:</strong> {poster.width} x {poster.height} cm</p>
                <p><strong>Varenummer (SKU):</strong> {poster.id}</p>
              </div>
              
              <div className={styles.purchaseSection}>
                <PurchaseBox price={poster.price} stock={poster.stock}>
                  {poster.stock > 0 && (
                    <div className={styles.stockInfo}>
                      <FaCheckCircle className={styles.checkmark} />
                      <span>{poster.stock} på lager</span>
                    </div>
                  )}
                </PurchaseBox>
              </div>
            </figcaption>
          </figure>
        </div>
      </Section>
    </div>
  );
}
