// App.jsx
import { Routes, Route } from 'react-router-dom'
import Form from './components/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
