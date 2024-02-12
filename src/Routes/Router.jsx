import { createBrowserRouter } from "react-router-dom";

import { 
    Address, AllOrder, AllProducts, AllUsers, 
    CheckOut, Contact, CreateProduct, Dashboard,
    DashboardIndex, Home, Login, Orders, 
    Payment_Cancel, Payment_Success, ProductDetails, 
    Products, 
    ShoppingCart, SignUp 
} from "../Page";

import MainLayout from "../layout/MainLayout";
import PrivatedRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",                
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home />
            },  
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },         
            {
                path: "/products",
                element: <Products />
            },                    
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
            {
                path: "/shoppingCart",
                element:   <PrivatedRoute>
                        <ShoppingCart />
                        </PrivatedRoute>
            },
            {
                path: "/dashboard",
                element: <PrivatedRoute>
                          <Dashboard />
                        </PrivatedRoute>,
                index: {
                    element: <DashboardIndex />
                },
                children: [                   
                    {
                        path: "orders",
                        element: <Orders />
                    },
                    {
                        path: "address",
                        element: <Address />
                    },
                    {
                        path: "createProduct",
                        element: <AdminRoute>
                                <CreateProduct />
                                </AdminRoute>
                    },
                    {
                        path: "allOrder",
                        element: <AdminRoute>
                                <AllOrder />
                                </AdminRoute>
                    },
                    {
                        path: "allUsers",
                        element: <AdminRoute>
                                <AllUsers />
                                </AdminRoute>
                    },
                    {
                        path: "allProducts",
                        element: <AdminRoute>
                                <AllProducts />
                                </AdminRoute>
                    },

                ]
            },           
            {
                path: "/checkout",
                element: <PrivatedRoute>
                            <CheckOut />
                        </PrivatedRoute> 
            },           
            {
                path: '/payment-success',
                element: <Payment_Success />
            },
            {
                path: '/payment-cancel',
                element: <Payment_Cancel />
            },
            
        ]
    }
])

export default router