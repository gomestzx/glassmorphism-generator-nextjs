import React, { useState } from 'react';
import { useControlsContext } from '../../hooks/useControlsContext';
import style from './styles.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toast';

const CssCopy = () => {
  const { blur, borderRadius } = useControlsContext();
  const wave = () => toast('Link Copiado 🎉', {
    backgroundColor: '#6955ED'
  });
  return (
    <div className={style.cssCopy}>
      <textarea
        className={style.textarea}
        value={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nborder-radius: ${borderRadius}px`}
        readOnly
      ></textarea>
      <br />
      <CopyToClipboard
        text={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nborder-radius: ${borderRadius}px`}
      >
        <button onClick={wave}>COPY</button>
      </CopyToClipboard>

      <ToastContainer position='bottom-center' delay={1500}/>
    </div>
  );
};

export default CssCopy;
