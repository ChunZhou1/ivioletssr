import { useRouter } from "next/router";
export const useProduct = () => {
  const router = useRouter();
  const handleCallBackForProduct = (keyValue: string) => {
    let url = "/";

    switch (keyValue) {
      case "proWeb":
        url = "/Web";
        break;

      case "softwareDev":
        url = "/Rest";
        break;

      case "comWeb":
        url = "/GerWeb";
        break;

      default:
        break;
    }

    router.push(url);
  };

  return handleCallBackForProduct;
};
