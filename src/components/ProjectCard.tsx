import React from 'react'

type Props = {
  title: string
  description?: string
}

export default function ProjectCard({ title, description }: Props) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="btn" href="#">View</a>
    </article>
  )
}
