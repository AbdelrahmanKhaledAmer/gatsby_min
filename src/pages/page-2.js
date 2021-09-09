import * as React from "react";
import { useTranslation } from "react-i18next";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SpecialLink from "../components/special_link";

const SecondPage = ({ location }) => {
  const { t } = useTranslation();

  return (
    <Layout location={location}>
      <Seo title="Page two" />
      <h1>{t("main.second")}</h1>
      <SpecialLink location={location} title={t("main.link_2")} to="/" />
    </Layout>
  );
};

export default SecondPage;
