import React, { useState, useEffect } from 'react';
import "./Store.css";
import axios from "axios";
import logo from "../Component/fav.webp"
import { BrowserRouter, Link } from 'react-router-dom';



export default function Store() {
  const [books, setBooks] = useState([]);

  const [Search , setSearch] = useState('')
  console.log(Search)
  
  
  
  
  
  
  
  useEffect(() => {
    let fetchApi = axios.get("https://reactnd-books-api.udacity.com/books" , { headers: { 'Authorization': 'whatever-you-want' } })
    fetchApi.then(response => {
      setBooks(response.data.books);
    }).catch(error => {
      
      console.error(error);
    });
  }, []);


  


  return (
    <div>
            <div className='nav'>
          <div  className='logo-div' ><img src={logo}  alt=""  className='logo' /><h1>Kalvium Books</h1></div>
        <div><input type="text" onChange={(e)=>setSearch(e.target.value)}  className='Search-bar' placeholder='Search Books' /></div>
        <Link to={"/Form"} > <button className='main-Register-btn'>Register</button></Link>
      </div>

      
    

   
      <ul>
        {books.filter((book)=>{
          return Search.toLocaleLowerCase()===''? book :book.title.toLocaleLowerCase().includes(Search)
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
