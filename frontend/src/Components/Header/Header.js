import './Header.style.scss';
import Button from '../Button';

import React from 'react'

const Header = () => {
  return (
    <header>
        <h1>Product List</h1>
        <div>
            <Button text='ADD'/>
            <Button text='MASS DELETE'/>
        </div>
    </header>
  )
}

export default Header