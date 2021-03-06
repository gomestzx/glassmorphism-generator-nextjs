import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import { useControlsContext } from '../../hooks/useControlsContext';
import style from './styles.module.scss';

const Controls = () => {
  const {
    blur,
    setBlur,
    trasnparency,
    borderRadius,
    setBorderRadius,
    setTransparency,
  } = useControlsContext();

  return (
    <div className={style.controls}>
      <div className={style.label}>
        <span>Blur</span>
        <span> {blur}</span>
      </div>
      <Slider
        value={blur}
        onChange={(e, value) => setBlur(value as number)}
        defaultValue={30}
        className={style.slider}
      />

      <div className={style.label}>
        <span>Border Radius</span>
        <span> {borderRadius}</span>
      </div>

      <Slider
        style={{ width: 200, marginLeft: 20, marginRight: 20 }}
        value={borderRadius}
        onChange={(e, value) => setBorderRadius(value as number)}
        defaultValue={30}
        className={style.slider}
      />

      <div className={style.label}>
        <span>Transparency</span>
        <span> {trasnparency}</span>
      </div>

      <Slider
        style={{ width: 200, marginLeft: 20, marginRight: 20 }}
        value={trasnparency}
        onChange={(e, value) => setTransparency(value as number)}
        className={style.slider}
        step={0.05}
        min={0.0}
        max={0.99}
      />
    </div>
  );
};

export default Controls;
