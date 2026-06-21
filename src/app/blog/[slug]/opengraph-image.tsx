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

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = await getPostBySlug(slug);

  const fontRegularData = readFileSync(
    path.join(process.cwd(), "public", "fonts", "XanhMono-Regular.ttf"),
  );
  const fontBoldData = readFileSync(
    path.join(process.cwd(), "public", "fonts", "Datatype-Bold.ttf"),
  );

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0b0f1a",
        fontFamily: "'Datatype'",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#3a89c8",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "60px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(58,137,200,0.15)",
              border: "1px solid rgba(58,137,200,0.4)",
              borderRadius: "6px",
              padding: "6px 14px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#60a5fa",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                color: "#60a5fa",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Blog
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize:
                frontmatter.title.length > 60
                  ? "52px"
                  : frontmatter.title.length > 40
                    ? "60px"
                    : "68px",
              fontWeight: "bold",
              color: "#f0f4ff",
              lineHeight: "1.15",
              margin: 0,
              maxWidth: "900px",
              fontFamily: "'Xanh Mono'",
            }}
          >
            {frontmatter.title}
          </h1>

          {frontmatter.summary && (
            <p
              style={{
                fontSize: "24px",
                color: "#8fa8c8",
                lineHeight: "1.5",
                margin: 0,
                maxWidth: "820px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {frontmatter.summary}
            </p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#c8d8f0",
                fontFamily: "'Xanh Mono'",
              }}
            >
              {frontmatter.author}
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#4a7090",
              }}
            >
              {formattedDate}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderTop: "1px solid rgba(58,137,200,0.25)",
              paddingTop: "10px",
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                color: "#3a89c8",
                letterSpacing: "0.02em",
              }}
            >
              a2ys.dev
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: "56px",
          top: "15%",
          bottom: "15%",
          width: "2px",
          backgroundColor: "rgba(58,137,200,0.35)",
        }}
      />
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Xanh Mono",
          data: fontRegularData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Datatype",
          data: fontBoldData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
