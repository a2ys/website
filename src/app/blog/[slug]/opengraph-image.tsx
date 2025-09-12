import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";
import path from "path";
import { readFileSync } from "fs";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const fontRegularPath = path.join(
  process.cwd(),
  "public",
  "fonts",
  "AnonymousPro-Regular.ttf"
);
const fontBoldPath = path.join(
  process.cwd(),
  "public",
  "fonts",
  "AnonymousPro-Bold.ttf"
);

const fontRegularData = readFileSync(fontRegularPath);
const fontBoldData = readFileSync(fontBoldPath);

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
          position: "relative",
          backgroundColor: "#030712",
          color: "#f9fafb",
          padding: "40px",
          boxSizing: "border-box",
          border: "10px solid #3a89b3",
          fontFamily: "'Anonymous Pro'",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "0 40px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            {frontmatter.title}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            position: "absolute",
            bottom: "40px",
            left: "40px",
            padding: "0 40px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontSize: "32px",
              color: "#9ca3af",
              fontWeight: "bold",
            }}
          >
            a2ys.dev
          </p>
          <p
            style={{
              fontSize: "32px",
              color: "#9ca3af",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "20px", fontSize: "32px" }}>🚀</span>
            thoughts and code
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Anonymous Pro",
          data: fontRegularData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Anonymous Pro",
          data: fontBoldData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
