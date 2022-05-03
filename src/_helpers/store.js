import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';



const loggerMiddleware = createLogger();


const store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware,
    )
);


export default store;