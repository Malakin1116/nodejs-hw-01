import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contactList = await readContacts();
  contactList;
};

removeAllContacts();
