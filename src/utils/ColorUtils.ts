export type Color =
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "green"
  | "teal"
  | "cyan"
  | "blue"
  | "purple"
  | "pink";

interface ColorClasses {
  shadow: string;
  border: string;
  text: string;
  textHover: string;
  bg: string;
  bgLight: string;
  bgHover: string;
}

export const colors: Color[] = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
  "blue",
  "purple",
  "pink",
];

export const colorClasses: Record<Color, ColorClasses> = {
  gray: {
    shadow: "shadow-gray",
    border: "border-gray-400",
    text: "text-gray-400",
    textHover: "text-gray-400",
    bg: "bg-gray-700",
    bgLight: "bg-gray-600",
    bgHover: "hover:bg-gray-600",
  },
  red: {
    shadow: "shadow-red",
    border: "border-red-400",
    text: "text-red-400",
    textHover: "text-red-400",
    bg: "bg-red-400",
    bgLight: "bg-red-300",
    bgHover: "hover:bg-red-300",
  },
  orange: {
    shadow: "shadow-orange",
    border: "border-orange-400",
    text: "text-orange-400",
    textHover: "text-orange-400",
    bg: "bg-orange-400",
    bgLight: "bg-orange-300",
    bgHover: "hover:bg-orange-300",
  },
  yellow: {
    shadow: "shadow-yellow",
    border: "border-yellow-400",
    text: "text-yellow-400",
    textHover: "text-yellow-400",
    bg: "bg-yellow-400",
    bgLight: "bg-yellow-300",
    bgHover: "hover:bg-yellow-300",
  },
  lime: {
    shadow: "shadow-lime",
    border: "border-lime-400",
    text: "text-lime-400",
    textHover: "text-lime-400",
    bg: "bg-lime-400",
    bgLight: "bg-lime-300",
    bgHover: "hover:bg-lime-300",
  },
  green: {
    shadow: "shadow-green",
    border: "border-green-400",
    text: "text-green-400",
    textHover: "text-green-400",
    bg: "bg-green-400",
    bgLight: "bg-green-300",
    bgHover: "hover:bg-green-300",
  },
  teal: {
    shadow: "shadow-teal",
    border: "border-teal-400",
    text: "text-teal-400",
    textHover: "text-teal-400",
    bg: "bg-teal-400",
    bgLight: "bg-teal-300",
    bgHover: "hover:bg-teal-300",
  },
  cyan: {
    shadow: "shadow-cyan",
    border: "border-cyan-400",
    text: "text-cyan-400",
    textHover: "text-cyan-400",
    bg: "bg-cyan-400",
    bgLight: "bg-cyan-300",
    bgHover: "hover:bg-cyan-300",
  },
  blue: {
    shadow: "shadow-blue",
    border: "border-blue-400",
    text: "text-blue-400",
    textHover: "text-blue-400",
    bg: "bg-blue-400",
    bgLight: "bg-blue-300",
    bgHover: "hover:bg-blue-300",
  },
  purple: {
    shadow: "shadow-purple",
    border: "border-purple-400",
    text: "text-purple-400",
    textHover: "text-purple-400",
    bg: "bg-purple-400",
    bgLight: "bg-purple-300",
    bgHover: "hover:bg-purple-300",
  },
  pink: {
    shadow: "shadow-pink",
    border: "border-pink-400",
    text: "text-pink-400",
    textHover: "text-pink-400",
    bg: "bg-pink-400",
    bgLight: "bg-pink-300",
    bgHover: "hover:bg-pink-300",
  },
};
