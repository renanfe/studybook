import React from 'react';
import Main from './main';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

export const query = graphql`
query($slug: String!) {
  contentfulGloriaNeighbor(
    slug: {
      eq: $slug
    }
  ) {
    title, subtitle { subtitle }, date (formatString: "MMMM Do, YYYY"), author, text {  json }
  } 
}
    `;

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url}></img>
      }
    }
  };
  return (
    <Main>
      <Head title={props.data.contentfulGloriaNeighbor.title} />
      <main>
        <h1 className="post-title">{props.data.contentfulGloriaNeighbor.title}</h1>
        <h3 className="post-subtitle">{props.data.contentfulGloriaNeighbor.subtitle.subtitle}</h3>
        <p className="post-date">{props.data.contentfulGloriaNeighbor.date} - {props.data.contentfulGloriaNeighbor.author}</p>
        <div className="post-content">{documentToReactComponents(props.data.contentfulGloriaNeighbor.text.json, options)}</div>
      </main>
    </Main>
  );
}

export default Blog;