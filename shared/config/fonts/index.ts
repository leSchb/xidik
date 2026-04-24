import localFont from "next/font/local";

export const onestFont = localFont({
  variable: "--font-onest",
  src: [
    {
      path: "../../../assets/Onest.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export const geologicaFont = localFont({
  variable: "--font-geologica",
  src: [
    {
      path: "../../../assets/Geologica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../assets/Geologica-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export const sfProTextFont = localFont({
  variable: "--font-sf-pro",
  src: [
    {
      path: "../../../assets/SFProText-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../assets/SFProText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../assets/SFProText-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});
export const rubikFont = localFont({
  variable: "--font-rubik",
  src: [
    {
      path: "../../../assets/Rubik.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});
export const daysOneFont = localFont({
  variable: "--font-days-one",
  src: [
    {
      path: "../../../assets/DaysOne.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export const avenirFont = localFont({
  variable: "--font-avenir",
  src: [
    {
      path: "../../../assets/Avenir.ttf",
      weight: "950",
      style: "normal",
    },
  ],
});

export const layoutFonts = [
  onestFont.variable,
  geologicaFont.variable,
  sfProTextFont.variable,
  rubikFont.variable,
  daysOneFont.variable,
  avenirFont.variable,
];
