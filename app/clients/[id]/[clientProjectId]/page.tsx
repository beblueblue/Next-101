'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from '../../../page.module.css';
import { SelectedClientProject } from '../../types';

export default function SelectedClientProject({
  params,
}: {
  params: SelectedClientProject;
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
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <h1>client id: {params.id}</h1>
      <h1>project id: {params.clientProjectId}</h1>
    </main>
  );
}
