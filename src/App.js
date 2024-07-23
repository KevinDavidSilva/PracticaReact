import MenuDropdown from './Menu/MenuDropdown';

function App() {
  return (
    <div className="App">
    <header className="App-header bg-gray-800">
      <MenuDropdown/>
      <div className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Responsive Navbar</h1>
        <p className="text-xl md:text-3xl mt-4">Bootstrap 5</p>
      </div>
    </header>
  </div>
  );
}

export default App;