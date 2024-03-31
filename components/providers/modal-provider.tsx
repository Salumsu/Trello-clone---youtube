"use client";

import React, { useEffect, useState } from "react";
import { CardModal } from "@/components/modals/card-modal";
import ProModal from "../modals/pro-modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
}