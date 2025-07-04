'use client'

import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Segmented from '@/components/ui/segmented'

export const RacketRecommendation = () => {
  const categories = ['남자', '여자']
  const [selected, setSelected] = useState(categories[0])

  return (
    <section>
      <h1 className="mb-2 text-lg font-bold">라켓 추천</h1>
      <div className="flex flex-col gap-2">
        <Segmented
          options={categories}
          value={selected}
          onChange={setSelected}
        />
        <Accordion type="multiple" className="flex flex-col gap-2">
          <AccordionItem value="1">
            <AccordionTrigger>Lorem ipsum dolor sit 1</AccordionTrigger>
            <AccordionContent>
              adipisicing elit. Harum esse minus assumenda maiores earum? Sequi
              doloribus omnis ratione error, at, commodi laboriosam ullam
              possimus minus ut saepe! Ad, corrupti dolor!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>Lorem ipsum dolor sit 2</AccordionTrigger>
            <AccordionContent>
              adipisicing elit. Harum esse minus assumenda maiores earum? Sequi
              doloribus omnis ratione error, at, commodi laboriosam ullam
              possimus minus ut saepe! Ad, corrupti dolor!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Lorem ipsum dolor sit 3</AccordionTrigger>
            <AccordionContent>
              adipisicing elit. Harum esse minus assumenda maiores earum? Sequi
              doloribus omnis ratione error, at, commodi laboriosam ullam
              possimus minus ut saepe! Ad, corrupti dolor!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
