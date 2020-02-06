import React from "react";

// Bootstrap
import { Spinner } from "react-bootstrap";

import "./PageLoading.css";

function PageLoading() {
  return (
    <div className="PageCenter">
      <Spinner animation="border" variant="secondary" />
    </div>
  );
}

export default PageLoading;
