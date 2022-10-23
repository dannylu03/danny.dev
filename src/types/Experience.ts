import { FC } from "react";

export interface Technology {
  name: string;
  Icon: FC<{ size: number }>;
}

export interface Experience {
  title: string;
  company?: string;
  description: string;
  image: string;
  period: string;
  color: string;
  technologies: Technology[];
  link?: string;
}
