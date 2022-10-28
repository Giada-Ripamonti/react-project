const Spinner = () => (
  <div className="flex justify-center items-center">
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-purple"
      role="status"
    >
      <span className="w-60 h-px visually-hidden"></span>
    </div>
  </div>
);

export default Spinner;
