export default function HeavyWidget() {
  const points = Array.from({ length: 60 }, (_, index) =>
    Math.round(Math.sin(index / 5) * 40 + 50)
  );

  return (
    <div className="heavy-widget">
      <p>Heavy chart placeholder (lazy-loaded).</p>
      <div className="chart-row">
        {points.map((height, index) => (
          <span
            key={index}
            className="chart-bar"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}
