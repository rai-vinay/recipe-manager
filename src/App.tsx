import './App.css'
import PrimaryButton from './components/atoms/PrimaryButton'

function App() {

  return (
    <div style={{ padding: '1rem' }}>
           <h1>Recipe Manager</h1>
           <PrimaryButton onClick={() => alert('Button clicked!')} text="Click Me" />
       </div>
  )
}

export default App
