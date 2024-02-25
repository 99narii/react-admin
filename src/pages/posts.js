import React from 'react';
import {
    Create,             //게시글 생성 C
    List,               //게시글 불러오기 R
    Edit,               //게시글 수정 U, edit 안에 delete도 들어있음(DeleteButton으로도 불러서 사용할 수 있음)
    EditButton,         //수정버튼
    Datagrid,           //게시글의 그리드
    TextField,          //게시글의 텍스트 데이터 영역
    ReferenceField,     //참조하는 데이터
    SimpleForm,         //create과 edit에 사용되는 폼
    ReferenceInput,     //수정을 위해 외래 키를 식별하기 위해 사용 여기서는 userId
    SelectInput,        
    TextInput,
    SearchInput         //검색 필터
} from 'react-admin';

//검색 필터
const postFilters = [
    <SearchInput source="q" alwaysOn />,
];

//게시물 리스트 불러오기
export const PostList = () => (
    // 리스트의 속성에 filters를 추가하여 간단하게 필터 기능
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

//게시물 수정하기
export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

//게시물 생성
export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
