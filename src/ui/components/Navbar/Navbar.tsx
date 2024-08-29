import React from 'react';
import styles from './Navbar.module.css';
import { Link, Flex, Box } from '@radix-ui/themes';



export const Navbar: React.FC<{  className?: string }> = ({ className }) => {
  return (
    <Flex className={`${className} ${styles.navbar}`} >
     
      <Box >
        <Link href="/" weight="regular">
          Sign in
        </Link>
      </Box>

      <Box >
        <Link href="/lista-libreria" >
          Lista Libreria
        </Link>
      </Box>

      <Box >
        <Link href="/modificar-libreria" >
          Modificar Libreria
        </Link>
      </Box>

    </Flex>
  );
};

