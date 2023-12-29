import styles from '../../page.module.css';

export default function PortfolioProject({
  params,
}: {
  params: { projectId: string };
}) {
  // This log will be printed on the server.
  console.log('params:', params);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>The Portfolio Project Page</h1>
        <h1>projectId: {params.projectId}</h1>
      </div>
    </main>
  );
}
