'use client'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import Segmented from '@/components/ui/segmented'

const HomePage = () => {
  const categories = [
    'Trending',
    'Technology',
    'Global Affairs',
    'Science',
    'Business',
  ]
  const [selected, setSelected] = useState(categories[0])

  return (
    <div>
      <Segmented options={categories} value={selected} onChange={setSelected} />

      <Input
        prefix="🔍"
        suffix="🔍"
        label="Search"
        helpText="Search for a topic"
      />
    </div>
  )
}

export default HomePage
