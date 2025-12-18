import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
          borderRadius: "50%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L3 17H7L5 13Z"
            fill="white"
            fillOpacity="0.95"
          />
          <path
            d="M19 13L21 17H17L19 13Z"
            fill="white"
            fillOpacity="0.95"
          />
          <path
            d="M5 11H19C20.1046 11 21 11.8954 21 13V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V13C3 11.8954 3.89543 11 5 11Z"
            fill="white"
          />
          <path
            d="M7 9L9 5H15L17 9H7Z"
            fill="white"
            fillOpacity="0.95"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
