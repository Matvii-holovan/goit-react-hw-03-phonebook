import css from './App.module.css';
import { Component } from 'react';
import { PhoneBookName } from './phoneBookName/PhoneBookName';
import { nanoid } from 'nanoid';
import BookItem from './phoneBookItem/phoneBookItem';
import ContactsFilter from './filter/ContactsFilter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      // console.log(this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createContacts = dataByForm => {
    const alreadyExists = this.state.contacts.find(
      el => el.name.toLowerCase() === dataByForm.name.toLowerCase()
    );
    if (alreadyExists) return alert('Already exist');

    const newContacts = {
      ...dataByForm,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newContacts, ...prev.contacts],
    }));
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };


  filterInputNames = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <div className={css.container}>
          <h1 className={css.titlePhoneBook}>Phonebook</h1>
          <PhoneBookName createContacts={this.createContacts} />
        </div>
        <div className={css.container}>
          <h2 className={css.titleContacts}>Contacts</h2>
          <ContactsFilter
            value={this.state.filter}
            onChange={this.filterInputNames}
          />
          <ul className="bookList">
            {this.state.contacts
              .filter(
                contact =>
                  this.state.filter === '' ||
                  contact.name
                    .toLowerCase()
                    .includes(this.state.filter.toLowerCase())
              )
              .map(el => (
                <BookItem
                  key={el.id}
                  contacts={el}
                  handleDelete={this.handleDelete}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
