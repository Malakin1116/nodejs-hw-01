// import { readContacts } from '../utils/readContacts.js';

// export const getAllContacts = async () => {
//   const contacts = await readContacts();
//   return contacts;
// };

// console.log(await getAllContacts());

import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = () => readContacts();

console.log(await getAllContacts());

// done
