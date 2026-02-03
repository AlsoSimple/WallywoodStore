import styles from './PriceDisplay.module.scss';

// Displays formatted price in Danish kroner with proper locale formatting
interface PriceDisplayProps {
  price: number;
  className?: string;
}

export function PriceDisplay({ price, className }: PriceDisplayProps) {
  return (
    <p className={`${styles.price} ${className || ''}`}>
      {/* Format price with Danish locale (e.g., 1.234,56) */}
      Kr. {price.toLocaleString('da-DK')}
    </p>
  );
}
