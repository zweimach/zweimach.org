import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function BlogListPage() {
  return (
    <Layout>
      <SEO title="zweimach's blog" />
      <div className="h-full text-center">
        <h1 className="my-3 sm:mt-4 sm:mb-8 font-serif text-5xl">Blog</h1>
        <h2 className="text-2xl">No post yet.</h2>
      </div>
    </Layout>
  );
}
