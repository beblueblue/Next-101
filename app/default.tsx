import styles from './page.module.css';
import Link from 'next/link';

export default function NoFoundPage() {
  // css mudule issue: https://github.com/vercel/next.js/issues/52245
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Page not found</h1>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  );
}
