import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="zweimach" />
      <div className="h-full flex flex-col mx-6">
        <div className="mt-8 mb-12 md:mt-12 md:mb-20 flex flex-col justify-center">
          <p className="uppercase text-base sm:text-lg font-bold text-blue-800">
            <span role="img" aria-label="waving-hand">
              👋
            </span>
            Hi! My name is Ananda Umamil
          </p>
          <h1 className="text-4xl sm:text-6xl leading-none font-serif text-gray-900">
            I make web apps
          </h1>
          <p className="md:text-2xl">
            I&apos;m a software engineer from&nbsp;
            <span role="img" aria-label="flag-indonesia" title="Indonesia">
              🇮🇩
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row">
          <div className="h-auto sm:h-full sm:mr-6 pt-1 border-t-4 border-blue-600">
            <p className="uppercase">recent post</p>
          </div>
          <div className="flex-1">
            <p className="mt-4 sm:mt-2 text-lg font-light">No post yet.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
