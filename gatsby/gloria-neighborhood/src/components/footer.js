import React from 'react';
import './footer.scss';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {

  const data = useStaticQuery(graphql`
  query {
    dataJson {
      footer {
        content
      }
    }
  }
  `);

  return (
    <footer>
      <div className="main-footer">
        <p>{data.dataJson.footer.content}</p>
      </div>
    </footer>
  );
};

export default Footer
