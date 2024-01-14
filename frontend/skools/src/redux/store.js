// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
// import {authReducer as AuthReducer} from './auth/reducer';
// import {searchReducer as SearchReducer} from './search/reducer';
// import {profileReducer as ProfileReducer} from './profile/reducer';
// import {cmsAuthReducer as CmsAuthReducer} from './cmsAuth/reducer';
// import {cmsDetailReducer as CmsDetailReducer} from './cmsDetails/reducer';
// import { eventModalReducer as EventModalReducer } from './event/reducer';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//     combineReducers({
//         auth: AuthReducer,
//         cmsAuth: CmsAuthReducer,
//         search: SearchReducer,
//         profile: ProfileReducer,
//         cmsDetail: CmsDetailReducer,
//         eventModal: EventModalReducer
        
//     }),
//     composeEnhancers(applyMiddleware(thunk, logger))
// );

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

import { authReducer as auth } from './auth/reducer';
import { searchReducer as search } from './search/reducer';
import { profileReducer as profile } from './profile/reducer';
import { cmsAuthReducer as cmsAuth } from './cmsAuth/reducer';
import { cmsDetailReducer as cmsDetail } from './cmsDetails/reducer';
import { eventModalReducer as eventModal } from './event/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    auth,
    cmsAuth,
    search,
    profile,
    cmsDetail,
    eventModal,
  }),
  composeEnhancers(applyMiddleware(thunk, logger))
);