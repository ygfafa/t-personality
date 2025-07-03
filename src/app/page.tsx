'use client'

import { useState } from 'react'

import { ShareCopy } from '@/components/share-copy'
import { ShareKakao } from '@/components/share-kakao'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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

      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Lorem ipsum dolor sit 1</AccordionTrigger>
          <AccordionContent>
            adipisicing elit. Harum esse minus assumenda maiores earum? Sequi
            doloribus omnis ratione error, at, commodi laboriosam ullam possimus
            minus ut saepe! Ad, corrupti dolor!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Lorem ipsum dolor sit 2</AccordionTrigger>
          <AccordionContent>
            adipisicing elit. Harum esse minus assumenda maiores earum? Sequi
            doloribus omnis ratione error, at, commodi laboriosam ullam possimus
            minus ut saepe! Ad, corrupti dolor!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Lorem ipsum dolor sit 3</AccordionTrigger>
          <AccordionContent>
            adipisicing elit. Harum esse minus assumenda maiores earum? Sequi
            doloribus omnis ratione error, at, commodi laboriosam ullam possimus
            minus ut saepe! Ad, corrupti dolor!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default HomePage
