import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gfydokfwssbrsbddblzi.supabase.co' // TODO: Add your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmeWRva2Z3c3NicnNiZGRibHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDE1NzksImV4cCI6MjA1NzIxNzU3OX0.ep02gSAAVgA27z4PuQsGcAzfIPobPpEgIrlPNWEVPtQ' // TODO: Add your Supabase Key
const supabase = createClient(supabaseUrl, supabaseKey)

function EmailLogger() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('emails') // TODO: Replace with your table name
      .insert([{ email }])
    alert("email success!")
    if (error) {
      console.error('Error inserting email:', error)
    } else {
      console.log('Email logged:', data)
      setEmail('') // Clear input field after submission
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        required 
      />
      <button type="submit">Log Email</button>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Evan's project</h1>
      <h2>Welcome to the Ultimate Dog Cursor Store!</h2>
      <p>Discover our unique collection of cursors designed specifically for dog lovers. Make your browsing experience fun and engaging with our adorable dog-themed cursors!</p>
      <p>Join our community of dog enthusiasts and enhance your digital experience. Sign up below to get started!</p>

      <EmailLogger />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
