import PropTypes from 'prop-types';
import {
  ContactUl,
  ContactItem,
  ContactName,
  ContactButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactUl>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <ContactName>
          {name} - {number}
        </ContactName>
        <ContactButton type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </ContactButton>
      </ContactItem>
    ))}
  </ContactUl>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
