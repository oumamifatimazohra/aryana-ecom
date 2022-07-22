import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { 
    productDetailsReducer,
    productListReducer 
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],   
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;