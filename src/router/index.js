import Users from '../pages/Users/Users';
import AddUser from '../pages/Users/CreateUsers';
import NotFoundPage from '../pages/NotFoundPage';
import UserDetails from '../pages/Users/UserDetails';
import CreateDocument from '../pages/Documents/CreateDocument';
import Documents from '../pages/Documents/Douments';

export const ROUTES = {
  USERS: '/users',
  CREATE_USER: '/users/create',
  USER_DETAILS: '/users/:id',
  DOCUMENTS: '/documents',
  CREATE_DOCUMENT: '/documents/create',
};

const { USERS, CREATE_DOCUMENT, CREATE_USER, DOCUMENTS, USER_DETAILS } = ROUTES;

export const routes = [
  {
    key: 'users',
    element: Users,
    path: USERS,
  },
  {
    key: 'add-user',
    element: AddUser,
    path: CREATE_USER,
  },
  {
    key: 'user-details',
    element: UserDetails,
    path: USER_DETAILS,
  },
  {
    key: 'documents',
    element: Documents,
    path: DOCUMENTS,
  },
  {
    key: 'add-documents',
    element: CreateDocument,
    path: CREATE_DOCUMENT,
  },
  {
    key: 'not-found-page',
    element: NotFoundPage,
    path: '*',
  },
];