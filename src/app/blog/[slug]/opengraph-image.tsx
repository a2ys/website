import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const runtime = "edge";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { frontmatter } = await getPostBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#030712",
          color: "#f9fafb",
          padding: "80px",
        }}
      >
        <h1
          style={{ fontSize: "60px", fontWeight: "bold", marginBottom: "20px" }}
        >
          {frontmatter.title}
        </h1>
        <p
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "24px",
            color: "#9ca3af",
          }}
        >
          a2ys.dev
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
