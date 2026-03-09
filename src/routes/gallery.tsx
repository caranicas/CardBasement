import { createFileRoute } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { cardsAtom, searchQueryAtom } from "../store";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  const [cards] = useAtom(cardsAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <h1>Card Gallery</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search cards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #646cff",
            width: "300px",
            maxWidth: "100%",
          }}
        />
      </div>
      <div className="gallery">
        {filteredCards.map((card) => (
          <div key={card.id} className="card-item">
            <h3>{card.name}</h3>
            <div
              style={{
                width: "100%",
                height: "200px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ color: "white", fontSize: "0.8rem" }}>
                Card Image
              </span>
            </div>
            <p style={{ fontSize: "0.9rem" }}>{card.description}</p>
          </div>
        ))}
      </div>
      {filteredCards.length === 0 && (
        <p>No cards found matching "{searchQuery}"</p>
      )}
    </div>
  );
}
