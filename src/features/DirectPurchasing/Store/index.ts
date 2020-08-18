import { useState } from "react";
import { createContainer } from "unstated-next";

function useDirectOrdering() {
  const [hivIncluded, setHIVIncluded] = useState(true);
  const [testPackage, setTestPackage] = useState();

  return {
    hivIncluded,
    setHIVIncluded,
    testPackage,
    setTestPackage
  };
}
export const DirectOrdering = createContainer(useDirectOrdering);
