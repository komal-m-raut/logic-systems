const Spinner = () => (
  <div
    id="spinner"
    className="fixed inset-0 flex items-center justify-center bg-white opacity-0 invisible transition-opacity duration-500 ease-out z-[99999] show:opacity-100 show:visible"
  >
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    />
  </div>
);

export default Spinner;
