import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import LoggedInGuard from '../routeGuards/LoggedInGuard';
import PropertyOwner from '../routeGuards/PropertyOwner';
import LoggedInProtect from '../routeGuards/loggedInProtect';
import Home from '../modules/public/home/Home';
import ForSale from '../modules/public/for-sale/ForSale';
import ForRent from '../modules/public/for-rent/ForRent';
import AboutUs from '../modules/public/about-us/AboutUs';
import Contacts from '../modules/public/contacts/Contacts';
import Login from '../modules/public/login/Login';
import Register from '../modules/public/register/Register';
import PropertyDetails from '../modules/public/property-details/PropertyDetails';
import Profile from '../modules/private/profile/Profile';
import MyProperties from '../modules/private/my-properties/MyProperties';
import CreateProperty from '../modules/private/create-property/CreateProperty';
import EditProperty from '../modules/private/edit-property/EditProperty';
import Error from '../modules/public/error/Error';
import { PropertyAvailability } from '../routeGuards/propertyAvailability';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/for-rent" element={<ForRent />} />

                    <Route
                        path="/for-rent/:propertyId"
                        element={
                            <PropertyAvailability>
                                <PropertyDetails />
                            </PropertyAvailability>
                        }
                    />
                    <Route path="/for-sale" element={<ForSale />} />
                    <Route
                        path="/for-sale/:propertyId"
                        element={<PropertyAvailability>
                            <PropertyDetails />
                        </PropertyAvailability>}
                    />

                    <Route path='/rented/:propertyId' element={<PropertyOwner><PropertyDetails /></PropertyOwner>} />
                    <Route path='/sold/:propertyId' element={<PropertyOwner><PropertyDetails /></PropertyOwner>} />
                    <Route path='/inactive/:propertyId' element={<PropertyOwner><PropertyDetails /></PropertyOwner>} />

                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Route>
                <Route element={<LoggedInProtect />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<LoggedInGuard />}>
                    <Route
                        path="/private/profile"
                        element={<PrivateLayout heading={`my profile`} />}
                    >
                        <Route path="/private/profile" element={<Profile />} />
                    </Route>
                    <Route
                        path="/private/my-properties"
                        element={<PrivateLayout heading={'my properties'} />}
                    >
                        <Route
                            path="/private/my-properties"
                            element={<MyProperties arrayKey={'properties'} />}
                        />
                    </Route>

                    <Route
                        path="/private/favorites"
                        element={
                            <PrivateLayout heading={'Favorite Properties'} />
                        }
                    >
                        <Route
                            path="/private/favorites"
                            element={<MyProperties arrayKey={'favorites'} />}
                        />
                    </Route>

                    <Route
                        path="/private/create"
                        element={<PrivateLayout heading={'add a property'} />}
                    >
                        <Route
                            path="/private/create"
                            element={<CreateProperty />}
                        />
                    </Route>

                    <Route
                        path="/private/for-rent/:propertyId/edit"
                        element={<PrivateLayout heading={'edit property'} />}
                    >
                        <Route
                            path="/private/for-rent/:propertyId/edit"
                            element={
                                <PropertyOwner>
                                    <EditProperty />
                                </PropertyOwner>
                            }
                        />
                    </Route>

                    <Route
                        path="/private/rented/:propertyId/edit"
                        element={<PrivateLayout heading={'add a property'} />}
                    >
                        <Route
                            path="/private/rented/:propertyId/edit"
                            element={
                                <PropertyOwner>
                                    <EditProperty />
                                </PropertyOwner>
                            }
                        />
                    </Route>

                    <Route
                        path="/private/for-sale/:propertyId/edit"
                        element={<PrivateLayout heading={'edit property'} />}
                    >
                        <Route
                            path="/private/for-sale/:propertyId/edit"
                            element={
                                <PropertyOwner>
                                    <EditProperty />
                                </PropertyOwner>
                            }
                        />
                    </Route>

                    <Route
                        path="/private/sold/:propertyId/edit"
                        element={<PrivateLayout heading={'edit property'} />}
                    >
                        <Route
                            path="/private/sold/:propertyId/edit"
                            element={
                                <PropertyOwner>
                                    <EditProperty />
                                </PropertyOwner>
                            }
                        />
                    </Route>
                </Route>

                <Route path='/404' element={<Error />}></Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
