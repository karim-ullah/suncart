import ProductCard from "@/componets/homepage/ProductCard";
import SummerCareTips from "@/componets/homepage/SummerCareTips";
import TopBrand from "@/componets/homepage/TopBrand";
import { getProduct } from "@/lib/loadproducts";

export default async function Home() {
  const products = await getProduct();
  //  console.log(products);

  return (
    <div className=" max-w-7xl px-4 mx-auto py-10">
      <h1 className="animate_animated animate__fadeInUp font-semibold text-3xl text-center pb-5">
        Popular Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>

      <div className="py-12">
        <SummerCareTips></SummerCareTips>
      </div>
      <div className="py-12">
        <TopBrand></TopBrand>
      </div>
    </div>
  );
}
