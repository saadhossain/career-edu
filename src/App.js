import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Routers/Routes';
import { Toaster } from 'react-hot-toast';
function App() {
  const router = Routes;
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
