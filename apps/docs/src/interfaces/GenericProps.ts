export interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface GenericTagProps {
  _key: string;
  text: string;
  className?: string | undefined;
}

export interface GenericDateProps {
  _createdAt: Date;
  _updatedAt: Date;
}

export type KitModule = {
  name: string;
  description: string;
  component: React.ReactNode;
};
