import React from 'react';
import Main from '../templates/main';
import Head from '../components/head';
import { useStaticQuery, graphql } from 'gatsby';

const About = () => {
  const data = useStaticQuery(graphql`
    query($page: String! = "about") {
      markdownRemark( frontmatter: { page: { eq : $page }}) {
        frontmatter {
          title, subtitle
        }
          html
      }
    }
  `);
    return (
      <div>
        <Main>
          <Head title="About" />
          <main>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div className="text-content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
          </main>
        </Main>
      </div>
    );
} 

export default About;