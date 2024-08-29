import React from 'react';
import styles from './sidebar.module.css';
import { Link, Flex, Heading, Box } from '@radix-ui/themes';



export const Sidebar: React.FC<{ isVisible: boolean, className?: string }> = ({ className }) => {
  return (
    <Flex className={`${className} ${styles.sidebar}`} >
      {/* <button className="close-button">✕</button> */}
      <Heading>Habilitador</Heading>
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

