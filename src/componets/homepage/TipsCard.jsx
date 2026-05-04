import { Button, Card, CardContent, CardHeader, CardTitle } from "@heroui/react";
import React from "react";

const TipsCard = ({ tip }) => {
  return (
    <Card className="w-full max-w-md mx-auto border shadow-lg rounded-2xl hover:bg-gray-100 transition">
     
      <CardContent className="space-y-4">
        <div>{tip.icon}</div>
      <div className="space-y-3">
        <h4 className="font-medium">{tip.title}</h4>
        <p className="text-sm text-gray-500">{tip.desc}</p>
      </div>
      </CardContent>
      <Button size="sm">Read More</Button>
    </Card>
  );
};

export default TipsCard;
