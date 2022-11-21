import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import type { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from '../../client/src/App'

import userReducer from '../../client/src/redux/user/user.slice'
import forumReducer from '../../client/src/redux/forum/forum.slice';
import leaderboardSlice from '../../client/src/redux/leaderboard/leaderboard.slice';
import store from '../../client/src/redux/store'
/*
const store = configureStore({
    reducer: {
        user: userReducer,
        forum: forumReducer,
        //leaderboard: leaderboardSlice
    },
    preloadedState: {
        user: {  isAuth: true,
            profile: {
                id: 1,
              first_name: '',
              second_name: '',
              login: '',
              email: '',
              phone: '',
              display_name: '',
              avatar: '',
            },
            appState: {
              service_id: '',
            },
            loading: false,
            error: ''}
    }
})
*/
function getHtml(content: string) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
            <title>Packman</title>
           
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="client.bundle.js"></script> 
            <script>window.__PRELOADED_STATE__= ${JSON.stringify(store.getState())}</script>
        </body>
        </html>
        `;
}

export default (req: Request, res: Response) => {
    const content = renderToString(
        <StaticRouter location={req.url}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    )

    res.send(getHtml(content));

} 