import styles from '../page.module.css';
import Link from 'next/link';

export default function Clients() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>The Clients Page</h1>
      </div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
            {/* no support, cc https://nextjs.org/docs/messages/app-dir-dynamic-href */}
            {/* <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
