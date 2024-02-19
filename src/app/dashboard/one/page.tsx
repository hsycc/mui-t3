import { api } from '~/trpc/server';

import OneView from 'src/sections/one/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: One',
};

export default async function Page() {
  const hello = await api.post.hello.query({ text: 'from tRPC' });

  console.log(hello);

  console.log(222);

  return <OneView />;
}
