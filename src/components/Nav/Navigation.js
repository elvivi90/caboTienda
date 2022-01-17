import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { MutantsContext } from "../../context/mutants-context";

import "./Navigation.css";

    const Navigation = (props) => {
        const [mutantList, setMutantList] = useContext(MutantsContext);
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
