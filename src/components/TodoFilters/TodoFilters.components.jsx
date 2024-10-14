const FiltersContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-creamy-caramel border-b border-solid border-soft-taupe">
      {children}
    </div>
  );
};

const ItemsLeft = ({ total = 0 }) => {
  return <p className="text-cherry text-sm">{total} items left</p>;
};

const FilterButtomContainer = ({ children }) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};

const FilterButtom = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        `hover:text-cherry cursor-pointer transition-all duration-300 ease-in-out ` +
        (active.toLowerCase().includes(filter.toLowerCase())
          ? "text-red-velvet"
          : "text-soft-taupe")
      }
    >
      {filter}
    </button>
  );
};

export { FiltersContainer, ItemsLeft, FilterButtomContainer, FilterButtom };
