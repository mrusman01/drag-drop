import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Item(props) {
  const { id } = props;

  const style = {
    backgroundColor: "#35363A",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Roboto",
    padding: "15px",
    borderRadius: "9px",
    marginTop: "20px",
  };

  return <div style={style}>{id}</div>;
}

export default function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
}
