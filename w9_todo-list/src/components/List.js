import { BiEdit, BiTrash } from "react-icons/bi";

const List = ({ id, title, removeItem, editItem }) => {
  return (
    <div className="list-item">
      <div className="title">{title}</div>
      <div className="btn-container">
          <BiEdit onClick={() => editItem(id)} className="btn" />
          <BiTrash onClick={() => removeItem(id)} className="btn" />
      </div>
    </div>
  );
};

export default List;
