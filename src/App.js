import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Routers/Routes';

function App() {
  const router = Routes;
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
