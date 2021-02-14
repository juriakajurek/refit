import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import Form from "../components/form";
import initialSurveyStyles from "./initialSurvey.module.scss";

const InitialSurvey = () => {
  return (
    <Layout className={initialSurveyStyles.initialSurveyModule}>
      <Form />
    </Layout>
  );
};

export default InitialSurvey;
