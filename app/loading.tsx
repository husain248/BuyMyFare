export default function Loading() {
  return (
    <div
      id="loading-area"
      className="pxl-loader style-3"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="loading-dot-spinner">
        <div className="loading-dot"></div>
      </div>
    </div>
  );
}

