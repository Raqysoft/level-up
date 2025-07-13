import { Loader } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="h-screen flex-center">
      <div className="rounded-full p-4 flex-center bg-background">
        <Loader className="size-12 text-primary/50 animate-spin" />
      </div>
    </div>
  );
}

export default Loading;
