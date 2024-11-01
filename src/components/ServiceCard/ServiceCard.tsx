import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceCard({children, link, pic}) {
  return (
    <div className="relative hover:-translate-y-2 transition-transform duration-200">
      <Link href={`/services/${link}`}>
        <Image src={pic} alt="Service 1" className="w-full h-auto" />
        {children}
      </Link>
    </div>
  )
}
