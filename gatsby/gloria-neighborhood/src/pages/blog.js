import React from 'react';
import Main from '../templates/main';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './blog.scss';
import Head from '../components/head';

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulGloriaNeighbor(
      sort : {
        fields : date,
        order: DESC
      }
    ){
      edges {
        node {
          title, date, author, subtitle { subtitle}, slug
        }
      }
    }
  }
  `);
  return (
    <div>
      <Main>
        <Head title="Blog" />
        <main>
          <h1>Blog</h1>
          {data.allContentfulGloriaNeighbor.edges.map(edge =>
            <article>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2 className="post-title">{edge.node.title}</h2>
                <p className="post-date">{edge.node.date} - {edge.node.author}</p>
                <p className="post-subtitle">{edge.node.subtitle.subtitle}</p>
              </Link>
            </article>
          )}
        </main>
      </Main>
    </div>
  );
}

export default Blog;