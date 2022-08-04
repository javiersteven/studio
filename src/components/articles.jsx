import React from "react"

const ARTICLES = [
  {
    title: "Server-Site Template Injection (SSTI)",
    description: "Recomendación para explotarlo: usar todo tipo de signos y seguir la guia de Burpsuite."
  }
]

const Articles = () => {
  return (
    <section id="articles" className="my-8">
      <h3 className="text-5xl font-bold">Articles</h3>
      {ARTICLES.map(({ title, description }) => (
        <article key="title">
          <h4 className="text-3xl">{title}</h4>
          <p className="text-white">{description}</p>
        </article>
      ))}

    </section>
  )
}

export { Articles }
