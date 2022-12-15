import React from 'react';
import SingleBook from './singleBook';

const BookList = () => (
  <div className="BookList">
    <SingleBook title="Alice In Wonderland" author="Lewis Carroll" />
    <SingleBook title="Harry Porter" author="JK Rowlings" />
    <SingleBook title="The Hobbit" author="JRR Tolkien" />
  </div>
);

export default BookList;
