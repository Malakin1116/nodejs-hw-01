import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (contacts) => {
  await fs.appendFile(PATH_DB, JSON.stringify(contacts));
};
