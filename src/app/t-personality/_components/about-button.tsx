'use client'
import { useState } from 'react'

import traitDefinitions from '@/app/t-personality/_data/trait_definitions.json'
import { BottomSheet } from '@/components/ui/bottom-sheet'
import { IconButton } from '@/components/ui/icon-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const 샷스타일 = traitDefinitions.filter(
  ({ code }) => code === 'P' || code === 'C'
)
const 사고방식 = traitDefinitions.filter(
  ({ code }) => code === 'O' || code === 'I'
)
const 포지셔닝 = traitDefinitions.filter(
  ({ code }) => code === 'N' || code === 'B'
)
const 태도 = traitDefinitions.filter(({ code }) => code === 'A' || code === 'E')

export const AboutButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      </IconButton>
      <BottomSheet height="80%" open={open} onClose={() => setOpen(false)}>
        <h2 className="mb-3 text-lg font-semibold">16 테니스 유형에 대해</h2>
        <Tabs defaultValue="0">
          <TabsList>
            <TabsTrigger value="0">샷 스타일</TabsTrigger>
            <TabsTrigger value="1">사고방식</TabsTrigger>
            <TabsTrigger value="2">포지셔닝</TabsTrigger>
            <TabsTrigger value="3">태도/동기</TabsTrigger>
          </TabsList>

          <TabsContent value="0">
            <About
              items={샷스타일.map(({ code, name_kr, description }) => ({
                title: name_kr,
                description,
                code,
              }))}
            />
          </TabsContent>
          <TabsContent value="1">
            <About
              items={사고방식.map(({ code, name_kr, description }) => ({
                title: name_kr,
                description,
                code,
              }))}
            />
          </TabsContent>
          <TabsContent value="2">
            <About
              items={포지셔닝.map(({ code, name_kr, description }) => ({
                title: name_kr,
                description,
                code,
              }))}
            />
          </TabsContent>
          <TabsContent value="3">
            <About
              items={태도.map(({ code, name_kr, description }) => ({
                title: name_kr,
                description,
                code,
              }))}
            />
          </TabsContent>
        </Tabs>
        {/* <About
          title="샷 스타일"
          items={샷스타일.map(({ code, name_kr, description }) => ({
            title: name_kr,
            description,
            code,
          }))}
        />
        <Divider />
        <About
          title="사고방식"
          items={사고방식.map(({ code, name_kr, description }) => ({
            title: name_kr,
            description,
            code,
          }))}
        />
        <Divider />
        <About
          title="포지셔닝"
          items={포지셔닝.map(({ code, name_kr, description }) => ({
            title: name_kr,
            description,
            code,
          }))}
        />
        <Divider />
        <About
          title="태도"
          items={태도.map(({ code, name_kr, description }) => ({
            title: name_kr,
            description,
            code,
          }))}
        />
        <Divider /> */}
      </BottomSheet>
    </>
  )
}

type AboutProps = {
  items: AboutItemProps[]
}
const About = ({ items }: AboutProps) => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <AboutItem key={item.code} {...item} />
      ))}
    </div>
  )
}

type AboutItemProps = {
  title: string
  description: string
  code: string
}
const AboutItem = ({ title, description, code }: AboutItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="nb-shadow flex h-6 w-6 shrink-0 items-center justify-center rounded">
          {code}
        </div>
        <span className="font-semibold">{title}</span>
      </div>
      <span className="ml-8 text-sm">{description}</span>
    </div>
  )
}
