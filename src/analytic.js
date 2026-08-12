import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-2BZLR2ZDWN");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
