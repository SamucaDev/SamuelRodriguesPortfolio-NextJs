export interface ProjectInterface {
  name: string;
  date: string;
  information: Array<InformationInterface>;
  images: Array<ImageInterface>;
}

interface InformationInterface {
  title: string;
  value: string;
}

export interface ImageInterface {
  path: string;
}
