import css from './phoneBookItem.module.css'

const BookItem = ({ contacts, handleDelete }) => {
  return (
    <li className={css.bookItem}>
      <span>{contacts.name}:</span> 
      <span className={css.itemNumber}>{contacts.number}</span>
      <button
        className={css.btnClose}
        type="button"
        aria-label="close"
        onClick={() => handleDelete(contacts.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default BookItem;
