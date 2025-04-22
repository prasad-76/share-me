import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './Containers/Login';
import Home from './Containers/Home';
import { useEffect, useState } from 'react';
import { fetchUser } from './utils/fetchUser';
import Spinner from './Components/Spinner';

export default function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(function () {
    const user = fetchUser()
    if (!user) navigate("/login");
    setLoading(false);
  }, []);
  if (loading) return <Spinner />

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  )
}