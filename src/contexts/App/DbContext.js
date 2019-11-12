import {createContext} from 'react';

const DbContext = createContext({
	dbConnection: null
});

export default DbContext;