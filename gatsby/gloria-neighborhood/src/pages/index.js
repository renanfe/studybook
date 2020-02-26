import 'reset-css/reset.css';
import React from 'react';
import Main from '../templates/main';
import './index.scss';
import Head from '../components/head';
import { useStaticQuery, graphql } from 'gatsby';

const Index = () => {
  const data = useStaticQuery(graphql`
  query($page: String! = "index") {
    markdownRemark( frontmatter: { page : { eq : $page}}) {
      frontmatter {
        title, subtitle
      }
      html
    }
  }`);

  return (
    <Main>
      <Head title="Home" />
      <main>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div className="text-content" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
      </main>
    </ Main>
  )
};

export default Index;
