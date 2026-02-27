import React, { Suspense } from 'react'
import { lazy } from 'react';
const HeavyWidget =  lazy(()=> import("./HeavyComponent"));

export default function CodeSplitingLazyLoading() {
  return (
    <div>
       <Suspense fallback={<div>Loading heavy component...</div>}>
          <HeavyWidget/>
       </Suspense>
    </div>
  )
}
