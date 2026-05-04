import { Card, CardContent } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TopBrand = () => {
    const brands = [
  {
    name: "SunCart Essentials",
    logo: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=200",
    desc: "Premium summer lifestyle products",
  },
  {
    name: "CoolBreeze",
    logo: "https://images.unsplash.com/photo-1526178613658-3f1622045557?w=200",
    desc: "Stay cool with smart gadgets",
  },
  {
    name: "FreshWear",
    logo: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=200",
    desc: "Light & breathable fashion",
  },
  {
    name: "HydroLife",
    logo: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=200",
    desc: "Hydration & wellness essentials",
  },
];
    return (
        <section>
      <h2 className="text-2xl font-semibold text-center mb-8">
        Top Summer Brands
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
          >
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-cover rounded-full border group-hover:scale-105 transition"
                />
              </div>

              <h3 className="font-semibold text-lg">{brand.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{brand.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    );
};

export default TopBrand;