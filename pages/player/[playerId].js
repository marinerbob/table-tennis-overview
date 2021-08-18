import React from 'react';

import { useRouter } from 'next/router';

import { Container } from "@material-ui/core";

const PlayerPage = () => {
    const router = useRouter();
    const { playerId } = router.query;
    
    return (<Container maxWidth="lg">
    <h1>Страница с id: {playerId}</h1>
  </Container>)
}

export default PlayerPage;
