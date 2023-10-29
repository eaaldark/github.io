// import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

export default function Layout() {
  // const { t, i18n } = useTranslation("main");

  // const [language, setLanguage] = useState<string>("en");

  return (
    <div className="flex min-h-screen w-full flex-col bg-sky-950">
      {/* <button
        type="submit"
        className="border-2 px-4 py-2"
        onClick={() => {
          i18n.changeLanguage(language === "en" ? "es" : "en");
          setLanguage((val: string) => {
            return val === "en" ? "es" : "en";
          });
        }}>
        {t("button")}
      </button> */}
      <Outlet />
    </div>
  );
}
