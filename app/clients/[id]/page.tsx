'use client';

import { useRouter } from 'next/navigation';

import styles from '../../page.module.css';
import { ClientProjectsParams } from '../types';

export default function ClientProjects({
  params,
}: {
  params: ClientProjectsParams;
}) {
  // When we set the component as server component by default, the log will be printed only on server.
  // When we set the component as client component by 'use client',
  //    1. the log will be printed on client when Every time the page is rendered.
  //    2. the log will be printed on server when the page get by new http request.
  console.log('ClientProjects params:', params);
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push('/clients/max/project-a');

    // no support.
    // router.push({
    //   pathName: '/clients/[id]/[clientprojectid]',
    //   query: { id: 'max', clientprojectid: 'project-a' },
    // });
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>The Projects of a Given Client</h1>
        <h1>client id: {params.id}</h1>
      </div>
      <div>
        <button onClick={loadProjectHandler}>Load Project A</button>
      </div>
    </main>
  );
}
