import { Card, CardContent, CardHeader, CardTitle } from "@heroui/react";
import { BiDroplet } from "react-icons/bi";
import { CiIceCream } from "react-icons/ci";
import { SiUnacademy } from "react-icons/si";
import TipsCard from "./TipsCard";

const SummerCareTips = () => {
  const tips = [
    {
      icon: <BiDroplet className="w-6 h-6 text-blue-500" />,
      title: "Stay Hydrated",
      desc: "Drink plenty of water throughout the day to avoid dehydration.",
    },
    {
      icon: <SiUnacademy className="w-6 h-6 text-yellow-500" />,
      title: "Use Sunscreen",
      desc: "Protect your skin from harmful UV rays with SPF 30+ sunscreen.",
    },
    {
      icon: <CiIceCream className="w-6 h-6 text-pink-500" />,
      title: "Eat Light Foods",
      desc: "Choose fresh fruits and light meals to stay cool and healthy.",
    },
  ];
  return (
    <div>
        <h2 className="animate_animated animate__fadeInUp font-semibold text-3xl text-center">Summer Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
            {
            tips.map((tip, index) => <TipsCard key={index} tip = {tip}></TipsCard>)
        }
        </div>
    </div>
  );
};

export default SummerCareTips;
