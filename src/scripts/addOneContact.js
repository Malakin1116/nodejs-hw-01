import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  const contactList = await readContacts();
  const newContact = createFakeContact();
  const newList = [...contactList, newContact];
  await writeContacts(newList);
};

addOneContact();

// done
