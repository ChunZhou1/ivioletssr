import { useRouter } from "next/router";
export const useProduct = () => {
  const router = useRouter();
  const handleCallBackForProduct = (keyValue: string) => {
    let url = "/";

    switch (keyValue) {
      case "web":
        url = "/Web";
        break;

      case "rest":
        url = "/Rest";
        break;

      case "gerWeb":
        url = "/GerWeb";
        break;

      default:
        break;
    }

    router.push(url);
  };

  return handleCallBackForProduct;
};
