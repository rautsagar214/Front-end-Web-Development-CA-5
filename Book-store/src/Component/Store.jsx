//Here i had imported   all the thinks like hooks and react etc which  i am going to use 

import React, { useState, useEffect } from 'react';
import "./Store.css";
import axios from "axios";
import logo from "../Component/fav.webp"
import { BrowserRouter, Link } from 'react-router-dom';



export default function Store() {

  // here i had use the useState hook to  change the state 
  const [books, setBooks] = useState([]);

  const [Search , setSearch] = useState('')
  
  
  
  
  
  
  
  // here I had fetch  the data from the api in useeffect because it handle all the side effect 
  useEffect(() => {

    //here i use axios to fetching the data
    let fetchApi = axios.get("https://reactnd-books-api.udacity.com/books" , { headers: { 'Authorization': 'whatever-you-want' } })
    fetchApi.then(response => {
      setBooks(response.data.books);

      // .catch is used to catch error here 
    }).catch(error => {
      
      console.error(error);
    });
  }, []);


  


  return (
    <div>
      {/* here i am making navbar here  */}
            <div className='nav'>
          <div  className='logo-div' ><img src={logo}  alt=""  className='logo' /><h1>Kalvium Books</h1></div>
        <div><input type="text" onChange={(e)=>setSearch(e.target.value)}  className='Search-bar' placeholder='Search Books' /></div>
        {/* here we change path when we clicj in register button  using routing  */}
        <Link to={"/Form"} > <button className='main-Register-btn'>Register</button></Link>
      </div>

      
    

   
      <ul>

        {/* here in filter is used to check the book title and the search word and display it  */}
        {books.filter((book)=>{
          return Search.toLocaleLowerCase()===''? book :book.title.toLocaleLowerCase().includes(Search)
          // here map is used to put fetched data in card list 
        }).map((book, i) => (
          <li key={i} className='card'>
            <div className='details-flex'>
              <img src={book.imageLinks.smallThumbnail} className='img' alt="" />
            <h2 className='title'>{book.title}</h2> 
            <p>⭐{book.averageRating}  <br /> Absolutely Free</p>

            </div>
          </li>
        ))}
      </ul>
       


    </div>
  );
}
