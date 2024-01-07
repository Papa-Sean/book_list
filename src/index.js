import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import books from './books'
import Book from './Book'
// const author = 'James Clear';
// const title = 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones';
// const img = './images/book1.jpg';

// const firstBook = {
//     author: 'James Clear',
//     title: 'Atomic Habits: An Easy & Proven Way to Build Goodd Habits & Break Bad Ones',
//     img: './images/book1.jpg'
// }

// const secondBook = {
//     author: 'Rebecca Yarros',
//     title: 'Fourth Wing',
//     img: './images/book2.jpg'
// }

const BookList = () => {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className='booklist'>
                {books.map((book, index)=>{
                    return <Book {...book} key={book.id} number={index}/>
                })}
            </section>
        </>
    );
};
    
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)
