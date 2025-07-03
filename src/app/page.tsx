'use client'

import { useState } from 'react'

import { ShareCopy } from '@/components/share-copy'
import { ShareKakao } from '@/components/share-kakao'
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
      <ShareKakao
        url="https://www.google.com"
        title="Google"
        description="Google is a search engine"
        imageUrl="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        buttonTitle="Google"
      />
      <ShareCopy url="https://www.google.com" />
    </div>
  )
}

export default HomePage
