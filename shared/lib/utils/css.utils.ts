import { CSSProperties } from "react";

export const convertCssPropertiesToString = (
  properties: CSSProperties,
): string => {
  const convertedProperties = Object.entries(properties)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
  return convertedProperties;
};
