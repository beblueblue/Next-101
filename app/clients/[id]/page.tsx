import styles from '../../page.module.css';
import { ClientProjectsParams } from '../types';

export default function ClientProjects({
  params,
}: {
  params: ClientProjectsParams;
}) {
  // When we set the component as server component by default, the log will be printed only on server.
  console.log('params:', params);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>The Projects of a Given Client</h1>
        <h1>client id: {params.id}</h1>
      </div>
    </main>
  );
}
