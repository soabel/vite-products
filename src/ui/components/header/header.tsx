import React from 'react';
import styles from './header.module.css';
import {  Text } from "@radix-ui/themes";
import { HeaderProps } from './header.props';


export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, className }) => {
  return (
    <header className={`${className} ${styles.header}`}>
      <button onClick={onToggleSidebar} className={`md:hidden ${styles.menuButton}`}>
        &#9776; {/* Símbolo del menú hamburguesa */}
      </button>
      <Text>Aplicación Base</Text>
    </header>
  );
}
