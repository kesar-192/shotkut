const Card = ({ children, className = "" }) => (
  <div
    className={`bg-surface border border-border rounded-xl ${className}`}
  >
    {children}
  </div>
);

export default Card;
