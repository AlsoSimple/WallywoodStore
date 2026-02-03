import { Button } from '../Button/Button';
import { PriceDisplay } from '../PriceDisplay/PriceDisplay';
import { useState } from 'react';
import styles from './PurchaseBox.module.scss';

// Purchase box with quantity selector and add to cart button, handles stock validation
interface PurchaseBoxProps {
  price: number;
  stock: number;
  onAddToCart?: () => void;
  children?: React.ReactNode;
}

export function PurchaseBox({ price, stock, onAddToCart, children }: PurchaseBoxProps) {
  const [quantity, setQuantity] = useState(1);

  // Validate quantity input to keep it within stock limits
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    console.log('Quantity changed to:', value, 'Stock available:', stock);
    if (value > 0 && value <= stock) {
      setQuantity(value);
    }
  };

  return (
    <div className={styles.purchaseContainer}>
      <PriceDisplay price={price} />
      
      <div className={styles.purchaseActions}>
        <input 
          type="number" 
          min="1" 
          max={stock}
          value={quantity}
          onChange={handleQuantityChange}
          className={styles.quantityInput}
          disabled={stock === 0}
        />
        <Button disabled={stock === 0} onClick={onAddToCart}>
          {stock > 0 ? 'Læg i kurv' : 'Udsolgt'}
        </Button>
        {children}
      </div>
    </div>
  );
}
