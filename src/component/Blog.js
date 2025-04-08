import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              My Blog
            </span>
          </h1>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://blog.ahusan.dev"
                title="Ahusan's Blog"
                className="w-full h-[800px] border-0"
                style={{ backgroundColor: 'transparent' }}
              ></iframe>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                If the embedded blog doesn&apos;t load properly, you can visit it directly:
              </p>
              <a
                href="https://blog.ahusan.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Visit My Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
