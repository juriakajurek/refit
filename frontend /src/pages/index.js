import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />

        <h1>Index page</h1>
        <h3>Hello world!</h3>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </ApolloProvider>
  );
};

export default IndexPage;
