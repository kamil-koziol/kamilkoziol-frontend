import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '../ui/badge'

import { Project, ProjectCategoriesColors } from '@/app/data/model/project'
import { getContrastColor } from '@/lib/colors'
import { Button } from '../ui/button'



export const ProjectCard: React.FC<Project> = ({ title, description, badges, img }) => {
  return (
    <Card className='bg-neutral-800'>
      <CardImage src={img} alt={title + " project image"} className='min-h-52' />
      <CardHeader>

        <CardTitle className='text-2xl text-neutral-100'>{title}</CardTitle>

        <div className='pb-4 pt-2 flex flex-wrap gap-2'>
          {badges && badges.map((badge, idx) => {
            let backgroundColor = ProjectCategoriesColors[badge] || "#fff";

            return (
              <Badge
                key={idx}
                variant='secondary'
                className=''
                style={{
                  backgroundColor,
                  color: getContrastColor(backgroundColor, true),
                }}>{badge}</Badge>
            )
          })}
        </div>

        <CardDescription className='text-neutral-300'>{description}</CardDescription>
      </CardHeader>
      <CardFooter className='justify-self-end pt-5 flex gap-4'>
        <Button className='text-neutral-100 p-0' variant='link' size='lg'>Read more {">"}</Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard