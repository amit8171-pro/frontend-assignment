import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Details from './pages/Details';
import Navbar from './components/navbar/Navbar';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
