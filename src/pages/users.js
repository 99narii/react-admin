import React from 'react';
import { List, 
    Datagrid, 
    TextField, 
    EmailField, 
    EditButton, 
    SimpleForm, 
    TextInput, 
    Edit, 
    Create
  } from 'react-admin';


export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);
