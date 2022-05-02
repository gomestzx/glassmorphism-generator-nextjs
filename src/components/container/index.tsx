import React from 'react';
import style from './styles.module.scss';
import { useControlsContext } from '../../hooks/useControlsContext';

const Container = () => {
  const { blur, borderRadius, trasnparency } = useControlsContext();

  return (
    <div
      className={style.background}
      data-aos='zoom-in-up'
      data-aos-delay='80'
      data-aos-duration='3000'
    >
      <div
        className={style.container}
        style={{
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          width: '300px',
          height: '320px',
          borderRadius: `${borderRadius}px`,
          backgroundColor: `rgba(142, 209, 252, ${trasnparency})`,
        }}
      ></div>
    </div>
  );
};

export default Container;
