import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../logo/logo-footer-white.png"
import "../style/MainFooter.css"

function MainFooter() {
    return (
        <div className="footer-main-div">
            <div className="footer-logo-div">
                <Link to="/">
                    <img src={logo} alt="Logo de Montmorency" width="225" height="40" />
                </Link>
            </div>

            <div className="footer-info-div">
                <p>Administrateur du site: Sylvain Labranche</p>
                <p>Contacter l'administrateur: 
                    <a href="mailto:sylvain.labranche@cmontmorency.qc.ca"> sylvain.labranche@cmontmorency.qc.ca</a>
                </p>
                <p>Dernière modification: 15/05/23</p>
            </div>

        </div>
    );
}

export default MainFooter;