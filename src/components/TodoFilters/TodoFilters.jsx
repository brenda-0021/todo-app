import {
  FilterButtom,
  FilterButtomContainer,
  FiltersContainer,
  ItemsLeft,
} from "./TodoFilters.components";

const TodoFilters = ({
  total,
  activeFilter,
  showActiveTodos,
  showAllTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtomContainer>
        <FilterButtom
          action={showAllTodos}
          active={activeFilter}
          filter="All"
        />
        <FilterButtom
          action={showActiveTodos}
          active={activeFilter}
          filter="Active"
        />
        <FilterButtom
          action={showCompletedTodos}
          active={activeFilter}
          filter="Complete"
        />
      </FilterButtomContainer>
      <button
        onClick={() => handleClearComplete()}
        className="text-cherry hover:text-red-velvet cursor-pointer transition-all duration-300 ease-in"
      >
        Clear Completed
      </button>
    </FiltersContainer>
  );
};

export { TodoFilters };
