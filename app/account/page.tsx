'use client'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

import type { AppProps } from 'next/app';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { fetchUserAttributes } from 'aws-amplify/auth';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

export default function Page() {
  
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Account
          </h1>

        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            
          <Authenticator>
          {({ signOut, user }) => (
          <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          </main>
          )}
          </Authenticator>

          </div>
        </div>
      </div>
    </>
  )
}
