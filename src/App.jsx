
// import Example from './components/Example';

function App() {
  return (
    <>
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Header</h1>
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="bg-gray-200 w-1/4 p-4">
          <h2 className="text-xl">Left Sidebar</h2>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <h2 className="text-xl">Main Content</h2>
        </main>

        {/* Right Sidebar */}
        <aside className="bg-gray-200 w-1/4 p-4">
          <h2 className="text-xl">Right Sidebar</h2>
        </aside>
      </div>
    </div>
    </>
  )
}

export default App
