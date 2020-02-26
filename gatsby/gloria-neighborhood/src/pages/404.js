import React from 'react'
import { Link } from 'gatsby';
import Main from '../templates/main';
import Head from '../components/head';

const NotFound = () => {
    return (
        <Main>
            <Head title="404 - Not Found" />
            <main>
                <h1>Page Not Found</h1>
                <p>Back to <Link to="/">Home</Link></p>
            </main>
        </Main>
    )
}

export default NotFound;