import { Todo } from "./store/useTodoStore";

export const toWordCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const filterTodos = (todos: Todo[], status: string) => {
  let filteredTodos;

  if (!status) {
    filteredTodos = [...todos];
  } else {
    filteredTodos = todos.filter((todo) => {
      if (status === "complete") {
        return todo.completed;
      }
      if (status === "incomplete") {
        return !todo.completed;
      }
      return true;
    });
  }
  return filteredTodos;
};
export const sortTodos = (todos: Todo[], order: string) => {
  let sortedTodos;

  if (!order) {
    sortedTodos = [...todos];
  } else {
    sortedTodos = [...todos].sort((a, b) => {
      const parseTime = (time: string) => {
        const [hoursMinutes, meridiem] = time.split(/(am|pm)/i);
        let [hours, minutes] = hoursMinutes.split(":").map(Number);

        if (meridiem.toLowerCase() === "pm" && hours !== 12) {
          hours += 12;
        } else if (meridiem.toLowerCase() === "am" && hours === 12) {
          hours = 0;
        }

        return hours * 60 + minutes;
      };

      const timeA = parseTime(a.createdAt);
      const timeB = parseTime(b.createdAt);

      return order === "newest" ? timeB - timeA : timeA - timeB;
    });
  }
  return sortedTodos;
};
export const searchTodos = (todos: Todo[], search: string) => {
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase()),
  );
  return searchedTodos;
};
