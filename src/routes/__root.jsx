import {useState} from 'react';
import {createRootRoute, Outlet } from "@tanstack/router";
import {TanStackRouterDevtools} from "@tanstack/react-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay.jsx";
import Header from "../Header.jsx";
import {CartContext} from "../contexts";

export const Route = createRootRoute({
    component: () => {
        const cartHook = useState([]);
        return (
            <>
            <CartContext.Provider value={cartHook}>
                <div>
                    <Header />
                    <Outlet />
                    <PizzaOfTheDay />
                </div>
            </CartContext.Provider> 
            <TanStackRouterDevtools />
            </>
        );
    }
});