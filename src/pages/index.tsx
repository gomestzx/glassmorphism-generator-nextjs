import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../../styles/Home.module.scss';

/* Components */

import Controls from '../components/controls';
import CssCopy from '../components/cssCopy';


/* Context */

import { ControlsProvider } from '../context/controlsContext';
import Container from '../components/container';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <div className={style.app}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ControlsProvider>
        <Header />
        <Container />
        <div className={style.flex}>
          <Controls />
          <CssCopy />
        </div>
      </ControlsProvider>
    </div>
  );
};

export default Home;