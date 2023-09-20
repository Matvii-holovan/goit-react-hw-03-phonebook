import { Component } from 'react';
import css from './PhoneBookName.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class PhoneBookName extends Component {
  state = INITIAL_STATE;

  handelChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
    // console.log(this.state)
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.createContacts(this.state);
    this.setState(INITIAL_STATE);
    console.log(this.state);
  };

  render() {
    return (
      <form className={css.container} onSubmit={this.handelSubmit}>
        <div className={css.container}>
          <label htmlFor="name" className={css.labelInput}>Name</label>
          <input
            value={this.state.name}
            onChange={this.handelChange}
            className={css.inputName}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={css.container}>
          <label htmlFor="number" className={css.labelInput}>Number</label>
          <input
            value={this.state.number}
            onChange={this.handelChange}
            className={css.inputName}
            id="number"
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    );
  }
}
