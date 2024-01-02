'use client';

import styles from '../../page.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function BlogPosts({ params }: { params: { slug: string[] } }) {
  // When we set the component as server component by default, the log will be printed only on server.
  // When we set the component as client component by 'use client', the log will be printed on both server and client.
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
        <h1>The Blog Posts Page</h1>
        <h1>slug: {JSON.stringify(params.slug)}</h1>
      </div>
    </main>
  );
}
