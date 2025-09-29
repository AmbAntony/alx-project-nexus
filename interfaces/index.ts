// interfaces/index.ts

// 🎴 Card Props
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// 🔘 Button Props
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface ProductProps {
  id: number;
  name: string;
  rating: number;
  price: number;
  image: string;
  category: string;
}
