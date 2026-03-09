import { atom } from "jotai";

// Example: Theme preference
export const themeAtom = atom<"light" | "dark">("dark");

// Example: Gallery filter/search
export const searchQueryAtom = atom("");

// Example: Selected card ID
export const selectedCardAtom = atom<string | null>(null);

// Example: Card data (you can replace this with real data)
export interface Card {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

export const cardsAtom = atom<Card[]>([
  {
    id: "1",
    name: "Example Card 1",
    imageUrl: "/placeholder1.jpg",
    description: "This is an example card. Replace with your own images!",
  },
  {
    id: "2",
    name: "Example Card 2",
    imageUrl: "/placeholder2.jpg",
    description: "Another example card for your collection.",
  },
]);
