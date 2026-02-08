"use client";

import { useRouter } from "next/navigation";
export const useProduct = () => {
  const router = useRouter();
  const handleCallBackForProduct = (keyValue: string) => {
    let url = "/";

    switch (keyValue) {
      case "proWeb":
        url = "/proWeb";
        break;

      case "softwareDev":
        url = "/softwareDev";
        break;

      case "comWeb":
        url = "/comWeb";
        break;

      default:
        break;
    }

    router.push(url);
  };

  return handleCallBackForProduct;
};
