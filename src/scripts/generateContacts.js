// import * as fs from 'node:fs';
// // import { createFakeContact } from '../utils/createFakeContact.js';
// import { PATH_DB_CONTACTS } from '../constants/contacts.js';

// const generateContacts = async (number) => {
//   //   const contact = createFakeContact();
//   //   console.log(contact);

//   //   const contactList = Array(number).fill(0).map(createFakeContact);

//   //   const buffer = await fs.readFile(PATH_DB_CONTACTS, (error, data) => {
//   //     console.log(error);
//   //     console.log(data);
//   //   });

//   const data = await fs.readFile(PATH_DB_CONTACTS, 'utf-8');
//   console.log(JSON.parse(data)[0]);
// };

// generateContacts(5);

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContact = Array(number).fill(0).map(createFakeContact);
  const newList = [...contactList, ...newContact];
  await writeContacts(newList);
};

generateContacts(5);
