import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function Basic({ title, description }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      {description}
    </div>
  );
}
