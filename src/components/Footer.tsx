import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="w-full bg-slate-100 h-fit">
      <div id="contact" className="container mx-auto h-fit p-7">
        <div className="w-full h-fit space-y-4">
          <div>
            <h2 className="font-medium text-center">Redes Sociales</h2>
            <div className="w-full py-4 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
              <div className="text-center mb-4 xl:mb-0">
                <SocialIcon
                  url="https://www.linkedin.com/in/edgar-andres-angrino-lafaux-681787194"
                  network="linkedin"
                  target={"_blank"}
                />
              </div>
              <div className="text-center mb-4 xl:mb-0">
                <SocialIcon
                  url="https://www.instagram.com/eaaldark/"
                  network="instagram"
                  target={"_blank"}
                />
              </div>
              <div className="text-center mb-4 xl:mb-0">
                <SocialIcon
                  url="https://t.me/eaaldark"
                  network="telegram"
                  target={"_blank"}
                />
              </div>
              <div className="text-center mb-4 xl:mb-0">
                <SocialIcon
                  url="https://github.com/eaaldark"
                  network="github"
                  target={"_blank"}
                />
              </div>
              <div className="text-center mb-4 xl:mb-0">
                <SocialIcon
                  url="https://twitter.com/eaaldark"
                  network="twitter"
                  target={"_blank"}
                />
              </div>
              <div className="text-center mb-4 xl:mb-0">
                <SocialIcon
                  url="mailto:eaangrino@misena.edu.co"
                  network="email"
                  target={"_blank"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <h1 className="p-5">
          Desarrollado por Edgar Andres Angrino Lafaux - {year}
        </h1>
      </div>
    </section>
  );
};

export default Footer;
