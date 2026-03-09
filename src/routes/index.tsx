import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Welcome to Card Basement</h1>
      <p>Your collection of cards, all in one place.</p>
      <div style={{ marginTop: "2rem" }}>
        <h2>Getting Started</h2>
        <ul style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
          <li>
            Add your card images to the <code>/public</code> folder
          </li>
          <li>
            Update the card data in <code>src/store.ts</code>
          </li>
          <li>Customize the gallery layout in the Gallery page</li>
          <li>Add your own content and styling</li>
        </ul>
      </div>
    </div>
  );
}
