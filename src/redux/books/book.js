
const BookReducer = (state = books, action) => {
    switch (action.type) {
      case ADD_BOOK:
        return [...state, action.payload];
      case REMOVE_BOOK:
        return state.filter((book) => book.id !== action.id);
      default:
        return state;
    }
  };

  export default BookReducer;