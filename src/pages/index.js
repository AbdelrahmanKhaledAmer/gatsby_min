import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SpecialLink from "../components/special_link";

const IndexPage = ({ location }) => {
  const { t } = useTranslation();

  return(
    <Layout location={location}>
      <Seo title="Home" />
      <h1>{t("main.title")}</h1>
      <p>{t("main.subtitle")}</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <SpecialLink location={location} title={t("main.link_1")} to="/page-2/" /> <br />
      </p>
    </Layout>
  );
};

export default IndexPage;
