import { ProductContent } from "components/product/ProductContent";
import {
  defaultProductId,
  getProductMap,
  getProductUiCopy,
  productIds,
  type ProductId,
} from "constant/product";
import { normalizeLocale, supportedLocales } from "constant/locale";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    locale: string;
    productId: string;
  };
};

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    productIds.map((productId) => ({ locale, productId })),
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const locale = normalizeLocale(params.locale);

  if (!locale) {
    notFound();
  }

  const productMap = getProductMap(locale);
  const productData = productMap[params.productId as ProductId] ?? productMap[defaultProductId];
  const productUiCopy = getProductUiCopy(locale);

  return (
    <ProductContent
      locale={locale}
      uiCopy={productUiCopy}
      heroTag={productData.heroTag}
      title1={productData.title1}
      title2={productData.title2}
      heroImage={productData.heroImage}
      charactSectionTitle={productData.charactSectionTitle}
      charactDataArray={productData.charactDataArray}
      functionSectionTitle={productData.functionSectionTitle}
      functionDataArray={productData.functionDataArray}
      ctaTitle={productData.ctaTitle}
      ctaDescription={productData.ctaDescription}
      ctaImage={productData.ctaImage}
      consultHref={productData.consultHref}
    />
  );
}
