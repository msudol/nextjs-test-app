'use client';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ConfigureAmplifyClientSide from '../components/ConfigureAmplify';

import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

// cognito configuration accessible app-wide wherever we decide to drop it
export function App({ signOut, user } : WithAuthenticatorProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConfigureAmplifyClientSide />
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default async function Page() {
  // adds authentication
  withAuthenticator(App)
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}

