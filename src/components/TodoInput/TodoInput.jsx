import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleTodo = (e) => {
    if (e.key === "Enter") {
      if (title.trim()) {
        addTodo(title);
        setTitle("");
      }
    }
  };

  return (
    <div className="mt-6 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-creamy-caramel border-solid p-3 rounded-full"></span>
      </div>
      <input
        type="text"
        className="focus:shadow-lg font-inter focus:shadow-red-velvet text-red-velvet placeholder-cherry pl-12 w-full py-4 bg-soft-taupe rounded-xl outline-none transition-all duration-300 ease-in-out"
        placeholder="What's next..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleTodo(e)}
      />
    </div>
  );
};

export { TodoInput };
