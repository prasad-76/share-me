import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/Data';
import MasonryLayout from "./MasonryLayout"
import Spinner from "./Spinner"

export default function Feed() {
   const [pins, setPins] = useState();
   const [loading, setLoading] = useState(false);
   const { categoryId } = useParams();

   useEffect(function () {
      setLoading(true)
      if (categoryId) {
         const query = searchQuery(categoryId);
         client.fetch(query)
            .then(data => {
               setPins(data);
               setLoading(false);
            });
      } else {
         client.fetch(feedQuery).then(data => {
            setPins(data);
            setLoading(false);
         });
      }

   }, [categoryId]);

   if (loading) return <Spinner message="We are addding new ideas to your feed" />

   return <div>
      {pins && <MasonryLayout pins={pins} />}
   </div>
}