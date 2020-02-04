import React from 'react';
import Main from '../templates/main';
import Head from '../components/head';
import { graphql, useStaticQuery } from 'gatsby';
import './contact.scss';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
  query($page: String! = "contact") {
    markdownRemark( frontmatter: { page : { eq : $page}}) {
      frontmatter {
        title, subtitle
      }
      html
    }
  }`);

  return (
    <div>
      <Main>
        <Head title="Contact" />
        <main>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div className="text-content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          <ul className="contact-menu">
            <li><a href="https://twitter.com/renanfe" rel="noopener noreferrer" target="_blank">Twitter</a></li>
            <li><a href="https://github.com/renanfe" rel="noopener noreferrer" target="_blank">Github</a></li>
          </ul>
        </main>
      </ Main>
    </div>
  );
};

export default ContactPage;