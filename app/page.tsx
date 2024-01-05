import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>The Home Page</h1>
      </div>
      <ul>
        {/* <li> */}
        {/* It can work. */}
        {/* But it is not recommended, it will send a new http request, and all app state would be lost */}
        {/* <a href="/portfolio">portfolio</a> */}
        {/* </li> */}
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </main>
  );
}
