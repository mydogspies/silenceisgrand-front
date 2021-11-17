import Head from 'next/head'
import styled from "styled-components";
import React from "react";

type Props = {
  online: boolean
};

const Home: React.FC<Props> = ({online}) => {

  return (
    <>
    <Head>
    <title>Silenceisgrand.com - index</title>
    </Head>
      <ParentContainer>
          <div>{online.toString()}</div>
      </ParentContainer>
    </>
  )
}

export default Home

const ParentContainer = styled.div`

`;
