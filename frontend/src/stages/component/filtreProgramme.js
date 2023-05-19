import React from 'react';

import "./filtreProgramme.css";

const FiltreProgramme = (props) => {
    const menuDeroulantHandler = (event) => {
        props.onChangementFiltre(event.target.value);
    };

    return (
        <div  className='liste'>
            <label className='label'>Choix de profil:  </label>
            <div>
                <select value={props.selected} onChange={menuDeroulantHandler} className='profil'>
                    <option value="Développement des applications" className='programme-choix'>Développement d'application</option>
                    <option value='Réseaux' className='programme-choix'>Réseaux</option>
                </select>
            </div>
        </div>
    );

};

export default FiltreProgramme;