import { StudioClient } from "./StudioClient";

// For static export (GitHub Pages), this page will show a message
// For local development, Sanity Studio will work normally
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export default function StudioPage() {
  if (isStaticExport) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>Sanity Studio</h1>
        <p style={{ color: "#666", margin: 0 }}>
          Sanity Studio is not available in static deployments.
        </p>
        <p style={{ color: "#666", margin: 0 }}>
          Run <code style={{ background: "#f1f1f1", padding: "0.25rem 0.5rem", borderRadius: "4px" }}>npm run dev</code> locally to access the studio.
        </p>
      </div>
    );
  }

  return <StudioClient />;
}

// Required for static export - generates the base studio route
export function generateStaticParams() {
  return [{ tool: [] }];
}
