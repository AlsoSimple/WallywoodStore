import styles from './Button.module.scss';

// Reusable button component that accepts content, click handler, and HTML button type
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, onClick, type = 'button', disabled = false } = props;

  return (
    <button className={styles.button} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
