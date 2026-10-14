const PageSkeleton = () => {
  return (
    <div
      className="page-skeleton-container"
      role="status"
      aria-live="polite"
      aria-label="Loading content..."
      style={{
        width: "100%",
        paddingBottom: "80px",
      }}
    >
      {/* ─── Hero Section Skeleton ──────────────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(48px, 8vh, 88px)",
          paddingBottom: "clamp(48px, 8vh, 88px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Tag / Badge */}
            <div
              className="premium-skeleton-shimmer"
              style={{
                width: "140px",
                height: "24px",
                borderRadius: "var(--radius-sm)",
              }}
            />

            {/* Title Lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "8px 0" }}>
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "92%",
                  height: "clamp(34px, 4vw, 44px)",
                  borderRadius: "var(--radius-sm)",
                }}
              />
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "74%",
                  height: "clamp(34px, 4vw, 44px)",
                  borderRadius: "var(--radius-sm)",
                }}
              />
            </div>

            {/* Description Lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "84%",
                  height: "16px",
                  borderRadius: "var(--radius-sm)",
                }}
              />
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "58%",
                  height: "16px",
                  borderRadius: "var(--radius-sm)",
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "12px", flexWrap: "wrap" }}>
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "168px",
                  height: "44px",
                  borderRadius: "var(--radius-sm)",
                }}
              />
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "148px",
                  height: "44px",
                  borderRadius: "var(--radius-sm)",
                }}
              />
            </div>
          </div>

          {/* Right Column (Terminal / Workspace Preview Window) */}
          <div
            className="premium-skeleton-card"
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Window Top Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "120px",
                  height: "14px",
                  borderRadius: "var(--radius-sm)",
                }}
              />
            </div>

            {/* Code / Command Lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div
                className="premium-skeleton-shimmer"
                style={{ width: "68%", height: "13px" }}
              />
              <div
                className="premium-skeleton-shimmer"
                style={{ width: "45%", height: "13px" }}
              />
              <div
                className="premium-skeleton-shimmer"
                style={{ width: "82%", height: "13px" }}
              />
            </div>

            {/* Inner Preview Box */}
            <div
              className="premium-skeleton-shimmer"
              style={{
                height: "120px",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                padding: "16px",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                className="premium-skeleton-shimmer"
                style={{ width: "36%", height: "14px" }}
              />
              <div
                className="premium-skeleton-shimmer"
                style={{ width: "56%", height: "10px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Grid Cards Section Skeleton ────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "64px",
        }}
      >
        {/* Section Heading Skeleton */}
        <div style={{ marginBottom: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            className="premium-skeleton-shimmer"
            style={{ width: "100px", height: "14px", borderRadius: "var(--radius-sm)" }}
          />
          <div
            className="premium-skeleton-shimmer"
            style={{ width: "240px", height: "28px", borderRadius: "var(--radius-sm)" }}
          />
          <div
            className="premium-skeleton-shimmer"
            style={{ width: "380px", maxWidth: "80%", height: "16px", borderRadius: "var(--radius-sm)" }}
          />
        </div>

        {/* 3 Cards Skeleton Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="premium-skeleton-card"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card Thumbnail / Frame Preview */}
              <div
                className="premium-skeleton-shimmer"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "0",
                  borderBottom: "1px solid var(--color-border)",
                }}
              />

              {/* Card Meta & Content */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div
                    className="premium-skeleton-shimmer"
                    style={{ width: "48%", height: "18px" }}
                  />
                  <div
                    className="premium-skeleton-shimmer"
                    style={{ width: "50px", height: "18px", borderRadius: "var(--radius-sm)" }}
                  />
                </div>

                <div
                  className="premium-skeleton-shimmer"
                  style={{ width: "88%", height: "13px" }}
                />
                <div
                  className="premium-skeleton-shimmer"
                  style={{ width: "65%", height: "13px" }}
                />

                <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                  <div
                    className="premium-skeleton-shimmer"
                    style={{ width: "44px", height: "20px", borderRadius: "var(--radius-sm)" }}
                  />
                  <div
                    className="premium-skeleton-shimmer"
                    style={{ width: "56px", height: "20px", borderRadius: "var(--radius-sm)" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PageSkeleton;
