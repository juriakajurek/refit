import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import { connect } from "react-redux";

const IndexPage = () => {
  const Counter = ({ isHouse, setIsHouse }) => (
    <div>
      <button
        onClick={() => {
          setIsHouse(!isHouse);
        }}
      >
        setIsHouse
      </button>
    </div>
  );

  const mapStateToProps = ({ isHouse }) => {
    return { isHouse };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      setIsHouse: (isHouse) => {
        dispatch({ type: `SET_IS_HOUSE`, isHouse });
      },
    };
  };
  const ConnectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);

  return (
    <Layout>
      <ConnectedCounter />
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
  );
};

export default IndexPage;
