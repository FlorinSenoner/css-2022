import React from 'react'
import { Link } from '@nextui-org/react'
import NextLink from 'next/link'

function Navigation() {
  return (
    <div style={{ marginTop: '32px' }}>
      <NextLink passHref href="/">
        <Link color="primary">⬅ Back to Overview</Link>
      </NextLink>
    </div>
  )
}

export { Navigation }
