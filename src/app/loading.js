import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <Spinner color="accent" />
        <span className="text-xs text-muted">Product Loading..</span>
      </div>
    </div>
  );
};

export default loading;
