import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import Form from "../components/form";
import initialSurveyStyles from "./initialSurvey.module.scss";

const InitialSurvey = () => {
  return (
    <Layout className={initialSurveyStyles.initialSurveyModule}>
      {/* <script>
        {function initAutocomplite() {
          autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            {
              types: ["establishment"],
              componentRestrictions: { country: ["PL"] },
              fields: ["place_id", "geometry", "name"],
            }
          );
        }}
      </script> */}

      <Form />
    </Layout>
  );
};

export default InitialSurvey;
