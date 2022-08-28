import React,{ useState,useEffect }from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./actions/userActions";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
// import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
// import SellerRoute from './components/SellerRoute';
// import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
// import LoadingBox from './components/LoadingBox';
// import MessageBox from './components/MessageBox';
// import MapScreen from './screens/MapScreen';
import DashboardScreen from './screens/DashboardScreen';
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';



function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">
              aryana
            </Link>
          </div>
          <div>
            <SearchBox />
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
    </header>
    <main>
    <Routes>
    <Route path="/cart" element={<CartScreen />} />
    <Route path="/cart/:id" element={<CartScreen />} />
    <Route  path="/product/:id"  element={<ProductScreen />} exact />
    <Route path="/signin" element={<SigninScreen />} />
    <Route path="/register" element={<RegisterScreen />} />
    <Route path="/shipping" element={<ShippingAddressScreen />} />
    <Route path="/payment" element={<PaymentMethodScreen />} />
    <Route path="/placeorder" element={<PlaceOrderScreen />} />
    <Route path="/search/name" element={<SearchScreen />} />
            <Route
              path="/search/name/:name"
              element={<SearchScreen />}
              exact
            />
            <Route
              path="/search/category/:category"
              element={<SearchScreen />}
              exact
            />
            <Route
              path="/search/category/:category/name/:name"
              element={<SearchScreen />}
              exact
            />
            <Route
              path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              element={<SearchScreen />}
              exact
            />

    <Route path="/profile" element={
      <PrivateRoute>
        <ProfileScreen />
      </PrivateRoute>
    }
  />
    <Route path="/order/:id" element={<OrderScreen />} />
    <Route
    path="/orderhistory"
    element={<OrderHistoryScreen />}
  />
  <Route
  path="/productlist"
  element={
    <AdminRoute>
      <ProductListScreen />
    </AdminRoute>
  }
/>

<Route
  path="/productlist/pageNumber/:pageNumber"
  element={
    <AdminRoute>
      <ProductListScreen />
    </AdminRoute>
  }
/>
<Route
  path="/orderlist"
  element={
    <AdminRoute>
      <OrderListScreen />
    </AdminRoute>
  }
/>
<Route
  path="/userlist"
  element={
    <AdminRoute>
      <UserListScreen />
    </AdminRoute>
  }
/>
<Route
  path="/user/:id/edit"
  element={
    <AdminRoute>
      <UserEditScreen />
    </AdminRoute>
  }
/>
<Route
  path="/dashboard"
  element={
    <AdminRoute>
      <DashboardScreen />
    </AdminRoute>
  }
/>
<Route
  path="/support"
  element={
    <AdminRoute>
      <SupportScreen />
    </AdminRoute>
  }
/>
    <Route path="/" element={<HomeScreen />} exact />
    </Routes>
    
    </main>
    <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div>{' '}
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
