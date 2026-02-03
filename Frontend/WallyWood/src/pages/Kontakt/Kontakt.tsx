import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
import styles from './Kontakt.module.scss';

// Contact page with form for name, email and message
export function Kontakt() {
  return (
    <div className={styles.kontakt}>
      <Section sectionTitle="Kontakt os">
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Dit navn: <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">
              Din email: <span className={styles.required}>*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">
              Din besked: <span className={styles.required}>*</span>
            </label>
            <textarea 
              id="message" 
              name="message"
              rows={10}
              required
            />
          </div>

          <Button type="submit">Send</Button>
        </form>
      </Section>
    </div>
  );
}
