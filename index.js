import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList.js';
import AddPersonForm from './components/AddPersonForm.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';

const initialState = {
  contacts: [
    'James Smith',
    'Thomas Anderson',
    'Bruce Wayne',
    'Gabriel Paredes',
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        contacts: [...state.contacts, action.data],
      };
    default:
      return state;
  }
}

// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data);

//   function addPerson(name) {
//     setContacts([...contacts, name]);
//   }

//   return (
//     <div>
//       <AddPersonForm handleSubmit={addPerson} />
//       <PeopleList data={contacts} />
//     </div>
//   );
//}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);
