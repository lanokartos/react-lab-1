import { useState } from 'react'

export default function ProfileCard({ name, group, technologies }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="profile-card">
      <h2 className="profile-name">{name}</h2>
      <p className="profile-group">
        <strong>Група: </strong> {group}
      </p>

      <section className="profile-technologies">
        <h3>Технології, які я хочу опанувати в цьому курсі:</h3>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <div className="profile-actions">
        <button
          type="button"
          className="like-button"
          onClick={() => setLikes((prev) => prev + 1)}
          aria-label="Поставити вподобайку"
        >
          Подобається: {likes}
        </button>
      </div>
    </article>
  )
}

