import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <h1>About Card Basement</h1>
      <div
        style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "left" }}
      >
        <p>
          This is a modern static site built with Vite, React, TanStack Router,
          and Jotai.
        </p>
        <h2>Tech Stack</h2>
        <ul>
          <li>
            <strong>Vite</strong> - Fast build tool and dev server
          </li>
          <li>
            <strong>React</strong> - UI library
          </li>
          <li>
            <strong>TypeScript</strong> - Type safety
          </li>
          <li>
            <strong>TanStack Router</strong> - Type-safe routing
          </li>
          <li>
            <strong>Jotai</strong> - Atomic state management
          </li>
          <li>
            <strong>Cloudflare Pages</strong> - Hosting and deployment
          </li>
        </ul>
        <h2>Features</h2>
        <ul>
          <li>Fast, static site generation</li>
          <li>File-based routing with TanStack Router</li>
          <li>Lightweight state management with Jotai</li>
          <li>Optimized for Cloudflare Pages deployment</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  );
}
