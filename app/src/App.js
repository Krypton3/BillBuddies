import React from "react";
import { Button } from "@nextui-org/react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <Button shadow color="primary" auto>
        NextUI Button
      </Button>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Tailwind Button
      </button>
    </div>
  );
}

export default App;
