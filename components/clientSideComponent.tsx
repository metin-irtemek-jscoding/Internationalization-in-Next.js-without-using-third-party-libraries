"use client";
import React from "react";

import { getTranslate } from "@/lang/clientSide";

export default function ClientSideComponent() {
  const t = getTranslate();
  return <div className="p-6">{t["This component works client side"]}</div>;
}
