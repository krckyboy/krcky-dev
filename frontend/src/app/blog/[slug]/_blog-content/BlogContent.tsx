import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import gStyles from '@/styles/global.module.scss';
import sharedStyles from '@/styles/about-and-blog-content.module.scss';
import 'highlight.js/styles/github-dark-dimmed.css';
import './styles.scss';

interface Props {
  markdown: string;
}

// Note: You can add a title to a part of code in MD like this: ```tsx:index.ts and this way you cover both the extension and file name.
const BlogContent: FunctionComponent<Props> = async ({ markdown }) => {
  return (
    <section className={`blog-content ${gStyles.text} ${sharedStyles.shared}`}>
      <ReactMarkdown rehypePlugins={[rehypeCodeTitles, rehypeHighlight]}>{markdown}</ReactMarkdown>
    </section>
  );
};

export default BlogContent;