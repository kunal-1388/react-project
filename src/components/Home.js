import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link id="login" to="/login">
                        LogIn
                    </Link>
                </li>
                <li>
                    <Link id="main" to="/main">
                        Main
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
