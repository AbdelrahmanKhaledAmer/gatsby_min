import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import "../../i18next";

const LanguageToggle = ({location}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Link
        style={{ color: "cyan" }}
        to="/de">
        {t("language.german")} {"<Link>"}
      </Link>
      &nbsp;
      <Link
        style={{ color: "cyan" }}
        to="/en">
        {t("language.english")} {"<Link>"}
      </Link>
      &nbsp;
      |
      &nbsp;
      <a
        style={{ color: "cyan" }}
        href="/de">
        {t("language.german")} {"<a>"}
      </a>
      &nbsp;
      <a
        style={{ color: "cyan" }}
        href="/en">
        {t("language.english")} {"<a>"}
      </a>
    </div>
  );
};

LanguageToggle.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LanguageToggle;