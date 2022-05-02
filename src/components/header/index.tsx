import Link from 'next/link';
import React from 'react';
import { useControlsContext } from '../../hooks/useControlsContext';
import style from './styles.module.scss';

const Header = () => {
  const { blur } = useControlsContext();

  return (
    <div
      className={style.header}
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
      }}
      data-aos='fade-in'
      data-aos-delay='80'
      data-aos-duration='3000'
      
    >
      <Link href='http://github.com/gomestzx'>Ver codigo fonte 🚀</Link>
    </div>
  );
};

export default Header;
