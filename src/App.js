import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import Doctors from './Components/Shops/Shops';
import Shops from './Components/Shops/Shops';
import Orders from './Components/Orders/Orders';
import MyOrders from './Components/My Orders/MyOrders';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';
import AddaNewService from './Components/AddaNewService/AddaNewService';
import Explore from './Components/Explore/Explore';
import Pay from './Components/Pay/Pay';
import Reviews from './Components/Review/Reviews';
import Admin from './Components/Admin/Admin';
import ManageProducts from './Components/ManageProducts/ManageProducts';
// import Doctors from './Components/Doctors/Doctors';


function App() {
  return (
    <div >
      <AuthProvider>

      <BrowserRouter>
              <Header></Header>

          <Switch>
            <Route exact path="/">
                     <Home></Home>

            </Route>
            <Route path="/home">
                  <Home></Home>
            </Route>
        
            
            <PrivateRoute path="/services/:bonus">
                    <Services></Services>
            </PrivateRoute>
            
            <PrivateRoute path="/aboutUs">
                   <AboutUs></AboutUs>
            </PrivateRoute>
            {/* <PrivateRoute path="order">
                  <Orders></Orders>
            </PrivateRoute> */}
            
          <Route path="/login">
            <Login></Login>

          </Route>
          <Route path="/myorder/:bonus">
               <MyOrders></MyOrders>

          </Route>
          <Route path="/explore">
            <Explore></Explore>

          </Route>
          <Route path="/pay">
            <Pay></Pay>

          </Route>
          <Route path="/admin">
           <Admin></Admin>

          </Route>
          <Route path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>

          </Route>
          <Route path="/manageroducts">
              <ManageProducts></ManageProducts>

          </Route>
          <Route path="/addservice">
              <AddaNewService></AddaNewService>

          </Route>
          <Route path="/review">
             <Reviews></Reviews>

          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <PrivateRoute path="/shops">
            <Shops></Shops>
         
          </PrivateRoute>
           
           
            <Route path="*">
                      <PageNotFound></PageNotFound>
            </Route>
          </Switch>

          
          <Footer></Footer>
          </BrowserRouter>



      </AuthProvider>
     
     
        
        
        
        
       
     


     
      

     

    </div>
  );
}

export default App;
