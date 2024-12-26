
import Header from './components/Header2';
import Content from './components/Content';

function App() {
  return (
    <>
    <div className="flex flex-col h-screen">
      {/* Header */}

      <Header/>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="bg-gray-200 w-1/4 p-4">
          <h2 className="text-xl">Left Sidebar</h2>
     
        </aside>

        {/* Main Content */}
        <Content/>

        {/* Right Sidebar */}
        <aside className="bg-gray-200 w-1/4 p-4">
          <h2 className="text-xl">Right </h2>
        </aside>
      </div>
    </div>
    </>
  )
}

export default App
