import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = (props: { fallbackPath: string; children: any }) => {
  const isAllowedToVisit = false; // Your Logic Here
  if (isAllowedToVisit) {
    return props.children;
  } else {
    return <Route path="*" element={<Navigate to={props.fallbackPath} replace />} />;
  }
};

export default PrivateRoute;
