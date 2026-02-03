import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
import styles from './Login.module.scss';

export function Login() {
  return (
    <div className={styles.login}>
      <Section sectionTitle="Log ind">
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              Email: <span className={styles.required}>*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">
              Adgangskode: <span className={styles.required}>*</span>
            </label>
            <input 
              type="password" 
              id="password" 
              name="password"
              required
            />
          </div>

          <Button type="submit">Log ind</Button>
        </form>
      </Section>
    </div>
  );
}
