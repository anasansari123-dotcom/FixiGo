export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export type Testimonial = {
  id: string;
  name: string;
  locality: string;
  city: string;
  device: string;
  rating: number;
  review: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
  suffix?: string;
};

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};
