import { api } from '~/trpc/server';
import { unstable_noStore as noStore } from 'next/cache';

import TwoView from 'src/sections/two/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Two',
};

export default async function Page() {
  noStore();
  const hello = await api.post.hello.query({ text: 'from tRPC' });

  return <TwoView info={hello} />;
}
