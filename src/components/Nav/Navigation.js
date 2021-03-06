import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

    const Navigation = (props) => {
    return (
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <Link to="/" exact>
                            Ventas
                        </Link>
                    </li>

                    <li>
                        <Link to="/compras">Compras</Link>
                    </li>
                    <li>
                        <Link to="/stock">Stock</Link>
                    </li>
                    <li>
                        <Link to="/clientes">Clientes</Link>
                    </li>
                    <li>
                        <Link to="/balance">Balance</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
