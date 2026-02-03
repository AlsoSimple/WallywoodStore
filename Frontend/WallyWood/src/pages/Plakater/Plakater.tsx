import { Section } from '../../components/Section/Section';
import styles from './Plakater.module.scss';
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/Fetch';
import { Button } from '../../components/Button/Button';
import { PriceDisplay } from '../../components/PriceDisplay/PriceDisplay';
import { GenreSelect } from '../../components/GenreSelect/GenreSelect';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';

interface Poster {
  id: number;
  name: string;
  image: string;
  price: number;
  slug: string;
}

// Poster listing page with genre filter, sorting, and pagination
export function Plakater() {
  const [searchParams] = useSearchParams();
  const selectedGenre = searchParams.get('genre');
  const [selectedSort, setSelectedSort] = useState<string>('asc');
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerPage = 12;
  
  // Build sorting parameters based on dropdown selection
  let sort_Key = 'price';
  let sort_Direction = 'asc';
  console.log('Current sort selection:', selectedSort);

  // Sort by name if selected
  if (selectedSort === 'name') {
    sort_Key = 'name';
  }

  // Sort by price in ascending or descending order
  if (selectedSort === 'asc' || selectedSort === 'desc') {
    sort_Direction = selectedSort;
    sort_Key = 'price';
  }
  
  // Build API URL with genre filter and sorting params
  const baseUrl = 'http://localhost:3000/posters';
  const url = selectedGenre 
    ? `${baseUrl}/list_by_genre/${selectedGenre}?attributes=id,name,image,price,slug&sort_key=${sort_Key}&sort_direction=${sort_Direction}`
    : `${baseUrl}?attributes=id,name,image,price,slug&sort_key=${sort_Key}&sort_direction=${sort_Direction}`;

  const { data: posters, isLoading, error } = useFetch<Poster[]>(url);
  console.log('Fetching from URL:', url);
  console.log('Total posters loaded:', posters?.length);

  return (
    
    <div className={styles.plakater}>
      <Section sectionTitle="">
        <div className={styles.sectionHeader}>
          <h2>Plakater</h2>
          <Dropdown setSelectedSort={setSelectedSort} />
        </div>
        <div className={styles.contentWrapper}>
          <aside className={styles.filters}>
            <h3>Filtre</h3>
            
            <div className={styles.filterSection}>
              <h4>Genre</h4>
              <GenreSelect selectedGenre={selectedGenre} />
            </div>
            
            <div className={styles.filterSection}>
              <h4>Prisområde</h4>
              <div className={styles.priceInputs}>
                <input 
                  type="number" 
                  placeholder="0" 
                />
                <span>-</span>
                <input 
                  type="number" 
                  placeholder="3800"
                />
                <span>kr</span>
              </div>
            </div>
          </aside>
          
          <div className={styles.postersGrid}>
            
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {posters
              ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((poster) => (
              <div key={poster.id} className={styles.posterCard}>
                <Link to={`/plakat/${poster.slug}`}>
                  <img src={poster.image} alt={poster.name} />
                </Link>
                <h3>{poster.name}</h3>
                <PriceDisplay price={poster.price} className={styles.price} />
                <Button>Læg i kurv</Button>
              </div>
            ))}
          </div>
        </div>
        {posters && posters.length > itemsPerPage && (
          <Pagination
            pageCount={Math.ceil(posters.length / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={(selected) => setCurrentPage(selected.selected)}
          />
        )}
      </Section>
      
    </div>
  );
}
