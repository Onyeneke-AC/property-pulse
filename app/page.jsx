import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome to our website!</h1>
      <Link href='/properties'>Show Properties</Link>
    </div>
  )
}

export default HomePage
