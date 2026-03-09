import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../App.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="app-shell">
        <header className="site-header">
          <nav className="nav">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
            <Link to="/gallery" className="[&.active]:font-bold">
              Gallery
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </nav>
        </header>

        <main className="page-main">
          <Outlet />
        </main>

        <footer className="site-footer">
          <p>Card Basement</p>
        </footer>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
