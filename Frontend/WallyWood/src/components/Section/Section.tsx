import { type ReactNode } from 'react';
import style from './Section.module.scss';

// Reusable section wrapper with title and content area for consistent page layout
interface SectionProps {
  sectionTitle: string;
  children: ReactNode;
}

export function Section(props: SectionProps) {
  const { sectionTitle, children } = props;

  return (
    <section className={style.section}>
      <h2>{sectionTitle}</h2>
      {children}
    </section>
  );
}