import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './header.scss';

const Header = () => {

  const data = useStaticQuery(graphql`
  query {
    dataJson {
      header {
        title
      }
    }
  }
  `);
  
  return (
    <header>
      <div class="main-header">
        <div class="title-header">{ data.dataJson.header.title }</div>
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;