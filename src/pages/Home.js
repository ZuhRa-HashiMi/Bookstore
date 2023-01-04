import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Home = () => {
  const books = [
    {
      id: 0,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 1,
      title: 'Dune',
      author: 'Frank Herbet',
    },
  ];

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
};

export default Home;
