export const Todoitem = ({ todo }) => {
  return (
    <div id="addedtask">
      {todo.title} - {todo.status ? "Done" : "not Done"}
      <button>Toggle</button>
     
    </div>
  );
};
