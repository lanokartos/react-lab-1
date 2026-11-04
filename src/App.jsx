import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  const studentInfo = {
    name: 'Дмитро Мамонець',
    group: 'КН-312',
    technologies: ['React Router', 'Redux Toolkit', 'TypeScript'],
  }

  return (
    <main className="app-container">
      <h1>Картка «Про мене»</h1>
      <ProfileCard
        name={studentInfo.name}
        group={studentInfo.group}
        technologies={studentInfo.technologies}
      />
    </main>
  )
}

export default App
