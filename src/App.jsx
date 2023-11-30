import React, { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('Desmontando')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main className='min-h-screen text-center relative bg-[#242424] text-white grid place-content-center overflow-hidden'>
      <h1 className='text-4xl font-semibold mb-5'>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)} className='bg-indigo-400/80 hover:bg-indigo-400 transition-colors px-4 py-2 rounded-lg'>
        {enabled ? 'Desactivar' : 'Activar'} Seguir Puntero
      </button>
      <div
        className='bg-gray-300 w-10 h-10 -top-5 -left-5 rounded-full absolute pointer-events-none'
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      />
    </main>
  )
}

export default App
