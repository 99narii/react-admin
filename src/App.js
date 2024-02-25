import React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from './pages/users';
import { PostList, PostEdit, PostCreate } from './pages/posts';
import Dashboard from './pages/dashboard';
import authProvider from './pages/authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
);

export default App;
