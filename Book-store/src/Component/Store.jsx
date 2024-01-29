import React, { useState, useEffect } from 'react';
import "./Store.css";
import axios from "axios";
import logo from "../Component/fav.webp"

export default function Store() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let fetchApi = axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
    fetchApi.then(response => {
      setBooks(response.data.books);
    }).catch(error => {
      // Handle errors here
      console.error(error);
    });
  }, []);

  return (
    <div>
            <div className='nav'>
          <div  className='logo-div' ><img src={logo}  alt=""  className='logo' /><h1>Kalvium Books</h1></div>
        <div><input type="text" className='Search-bar' placeholder='Search Books' /></div>
        <div><button className='main-Register-btn'>Register</button></div>
      </div>

      
    {/* <div  className='ul-container' > */}

   
      <ul>
        {books.map((book, i) => (
          <li key={i} className='card'>
            <div className='details-flex'>
              <img src={book.imageLinks.smallThumbnail} className='img' alt="" />
            <h2 className='title'>{book.title}</h2>
            <p>⭐{book.averageRating}Free</p>

            </div>
          </li>
        ))}
      </ul>
      {/* </div> */}


    </div>
  );
}
