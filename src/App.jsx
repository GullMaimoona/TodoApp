import Input from "./components/Input";
import List from "./components/List";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300">
      
      <Navbar />

      {/* Center area */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        
        <div className="w-full max-w-2xl min-h-[40vh] bg-white p-6 rounded-2xl shadow-lg">

          <h1 className="text-2xl font-bold text-center mb-5">
            Todo App
          </h1>

          <Input />
          <List />

        </div>

      </div>

    </div>
  );
}