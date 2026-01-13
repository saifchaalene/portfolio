import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  title: string
  description?: string
}

export default function ProjectCard({ title, description }: Props) {
  const { t } = useTranslation()

  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="btn" href="#">{t('common.view', 'View')}</a>
    </article>
  )
}
