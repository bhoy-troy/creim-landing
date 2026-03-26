export interface NavLink {
  label: string;
  path: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface UseCase {
  sector: string;
  icon: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlight: boolean;
}
