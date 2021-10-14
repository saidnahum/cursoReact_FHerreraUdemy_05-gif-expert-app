import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

   const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Naruto']);

   // const handleAdd = () => {
   //    //setCategories([...categories, 'One Piece']);
   //    setCategories(categories => [...categories, 'One Piece']);
   // }

   return (
      <div>
         <h2>Gif Expert App</h2>
         <AddCategory setCategories={ setCategories }/>
         <hr />

         <ol>
            {
               categories.map((category, i) => {
                  return <li key={i}>{category}</li>
               })
            }
         </ol>
      </div>
   )
}

export default GifExpertApp;