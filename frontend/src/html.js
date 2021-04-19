import React from "react";
import PropTypes from "prop-types";

import createStore from "./state/createStore";
import { Provider } from "react-redux";

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const store = createStore();
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});
export default function HTML(props) {
  const API_KEY = process.env.GATSBY_REFIT_API_KEY;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <html {...props.htmlAttributes}>
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <script
              async
              src={
                "https://maps.googleapis.com/maps/api/js?key=" +
                API_KEY +
                "&libraries=places"
              }
            ></script>
            {props.headComponents}
          </head>
          <body {...props.bodyAttributes}>
            {props.preBodyComponents}
            <div
              key={`body`}
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: props.body }}
            />
            {props.postBodyComponents}
          </body>
        </html>
      </ApolloProvider>
    </Provider>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
