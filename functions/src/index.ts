// src/index.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// import * as UpCaseMessages from './upcase-messages'

admin.initializeApp(functions.config().firebase);

import * as DeleteUser from "./delete-user";

export const deleteUser = DeleteUser.deleteUser;
