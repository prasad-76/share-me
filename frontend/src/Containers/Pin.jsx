import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../Components/NavBar";
import Feed from "../Components/Feed";
import PinDetail from "../Components/PinDetail";
import Search from "../Components/Search";
import CreatePin from "../Components/CreatePin";

export default function Pin({ user }) {
   const [searchTerm, setSearchTerm] = useState("");

   return <div className="px-2 md:px-5">
      <div className="bg-gray-50">
         <NavBar user={user} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="h-full">
         <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/category/:categoryId" element={<Feed />} />
            <Route path="/pin-detail/:pinId" element={<PinDetail user={user && user} />} />
            <Route path="/create-pin" element={<CreatePin user={user && user} />} />
            <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
         </Routes>
      </div>
   </div>;
}