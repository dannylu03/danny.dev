import { FC } from "react";

export interface Skill {
  name: string;
  Icon: FC<{ color: string; size: number }>;
}
