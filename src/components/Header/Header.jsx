import React, { useState } from "react";
import './Header.css';
import logo from "./logo192.png";
import listMenu from './navData';
import { FaBars, FaAlignLeft } from 'react-icons/fa'

function Header() {
  const [displayCheck, setDisplay] = useState(false);
  return(
    <header>
      <div className="menu">
        { displayCheck ? 
          <FaBars
            onClick={ () => setDisplay(!displayCheck) }
            className="hamburguer"
          />
            :
          <FaAlignLeft
            onClick={ () => setDisplay(!displayCheck) }
            className="hamburguer"
          />
        }
        <img src={ logo } alt="logo"/>
      </div>
      { displayCheck && 
        <ul className='navWindow'>
          {listMenu.map((e,i) => {
            return (
              <li className={ e.cName }>
                <p className='oText'>{ e.title }</p>
                { e.icon }
              </li>
            )
          })}
        </ul>
      }
    </header>
  );
}

export default Header;
