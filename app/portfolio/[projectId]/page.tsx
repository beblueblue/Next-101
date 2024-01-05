'use client';

import styles from '../../page.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PortfolioProject({
  params,
}: {
  params: { projectId: string };
}) {
  // When we set the component as server component by default, the log will be printed only on server.
  // When we set the component as client component by 'use client',
  //    1. the log will be printed on client when Every time the page is rendered.
  //    2. the log will be printed on server when the page get by new http request.
  console.log('params:', params);

  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log('navigation: ', {
    pathName,
    router,
    searchParams,
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>The Portfolio Project Page</h1>
        <h1>projectId: {params.projectId}</h1>
      </div>
    </main>
  );
}
