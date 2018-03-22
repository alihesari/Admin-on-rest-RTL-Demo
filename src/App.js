import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete  } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import farsiMessages from 'aor-language-farsi';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { PostList, PostEdit, PostCreate } from './Posts';
import { UserList } from './Users';
import Dashboard from './Dashboard';
import authClient from './authClient';

// Set Farsi messages
const messages = {
    'fa': farsiMessages,
};

// Customize Theme
const myTheme = {
    isRtl: true
};

const App = () => (
    <Admin theme={getMuiTheme(myTheme)} authClient={authClient} dashboard={Dashboard} locale="fa" messages={messages} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}  />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;