// == Import
import Field from 'src/components/Field';
import React, { useState } from 'react';
import remove from './images/remove.png';
import verifie from './images/verifie.png';
import './styles.scss';


// == Composant
const Checkout = () => {

  let totalProduit = 30;
  let shipping = 3.50;
  let totalCommande = totalProduit + shipping;

  const [popUp, setpopUp] = useState("nopopup");

  return (
  <div className='Checkout'>
    <div className='infoPerso'>
      <div className='verif'>vérification d'adresse : ici l'adresse</div>
      <div className='checkbox'>
        <label>
          <input type="checkbox" />
            Quick and collect
        </label>
      </div>

      < Field 
      identifier="info-livreur"
      placeholder=""
      label="Information pour le livreur" />

      < Field 
      identifier="Prénom"
      placeholder=""
      label="Prénom" />

      < Field 
      identifier="Nom"
      placeholder=""
      label="Nom" />

    </div>
      <div className='Total'>
        <div>Total de la commande</div> 
        <div>Shipping</div>
        <div className='Finalprice'>Total</div>
        <div className='btnPayer2' onClick={() => setpopUp('popup')}>PAYER</div>
      </div>
      
      <div className='Totaux'>
        <div>30</div>
        <div>3.50</div>
        <div className='Finalprice'>{totalCommande}€</div>
      </div>

    <div className={popUp}>
      <div className='btnEchap' onClick={() => setpopUp('nopopup')}>+</div>
      <div className='confirmation'>État de la commande : </div>
      <div className='etat'>Confirmé !</div>
      <div>
      <img className='icone' src={verifie} alt="verifie" />
      </div>
      <div className='heure' >commande prête pour : heure</div>
    </div>

      
  </div>
  );
};

// == Export
export default Checkout;




//Mathys
