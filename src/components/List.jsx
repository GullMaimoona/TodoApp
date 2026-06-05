import Item from "./Item";

function List(props) {
  return (
    <div className="mt-5 space-y-3">
      {props.tasks.map((task) => (
        <Item
          key={task.id}
          id={task.id}
          title={task.title}
          isCompleted={task.isCompleted}
          createdAt={task.createdAt}
        />
      ))}
    </div>
  );
}

export default List;
