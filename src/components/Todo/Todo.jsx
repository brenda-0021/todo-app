const Todo = ({ todo, handleSetComplete, handleDelete }) => {
  const { id, title, completed } = todo;

  return (
    <div className="flex items-center justify-between p-4 bg-soft-taupe border-b border-solid border-creamy-caramel">
      <div className="flex items-center">
        {completed ? (
          <div
            onClick={() => handleSetComplete(id)}
            className="bg-cherry p-1 rounded-full cursor-pointer mr-2"
          >
            <img className="h-4 w-4" src="/check-icon.svg" alt="Check Icon" />
          </div>
        ) : (
          <span
            onClick={() => handleSetComplete(id)}
            className="border-solid border border-creamy-caramel rounded-full p-3 cursor-pointer mr-2"
          ></span>
        )}

        <p className={"pl-3 " + (completed ? "line-through" : "")}>{title}</p>
      </div>
      <img
        onClick={() => handleDelete(id)}
        className="h-5 w-5 text-cherry cursor-pointer transition-all duration-300 ease-in"
        src="/close-icon.svg"
        alt="Close Icon"
      />
    </div>
  );
};

export { Todo };
