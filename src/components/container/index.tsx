import React from 'react';
import style from './styles.module.scss';
import { useControlsContext } from '../../hooks/useControlsContext';

const Container = () => {
  const { blur, borderRadius } = useControlsContext();

  return (
    <div className={style.background} >
    <div
      className={style.container}
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        width: '300px',
        height: '320px',
        borderRadius: `${borderRadius}px`
      }}
    ></div>
    </div>
  );
};

export default Container;
