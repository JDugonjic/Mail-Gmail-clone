import React from "react";
import { useBreakpoint } from "./breakpoint.js";

const Usage = () => {
  const breakpoints = useBreakpoint();

  const matchingList = Object.keys(breakpoints).map((media) => (
    <li key={media}>
      {media} ---- {breakpoints[media] ? "Yes" : "No"}
    </li>
  ));

  return <ol>{matchingList}</ol>;
};
