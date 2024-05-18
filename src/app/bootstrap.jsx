'use client';
import { useEffect } from "react";

function ImportBsJS() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}

export default ImportBsJS;
