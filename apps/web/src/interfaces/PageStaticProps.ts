import { Child } from "./GenericProps";

export interface PageStaticProps {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  description: Description[];
  indicator: string;
  order: number;
  title: string;
}

export interface Description {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}
