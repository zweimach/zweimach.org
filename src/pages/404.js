import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" />
      <div className="h-full w-full flex justify-center items-center flex-col py-12 px-4">
        <h1 className="text-5xl">404</h1>
        <h2 className="text-2xl">Not Found</h2>
      </div>
    </Layout>
  );
}
