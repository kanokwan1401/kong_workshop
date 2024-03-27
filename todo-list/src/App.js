import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const [alert, setAlert] = useState({ show: false, mag: "", type: "" });
  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitData = (e) => {
    e.preventDefault();
    if (!name) {
      // Show Alert
      setAlert({ show: true, msg: "Please add your text **", type: "error" });
    } else if (checkEditItem && name) {
      // Update text edit
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(result);
      setName("");
      setCheckEditItem(false);
      setEditId(null);
      setAlert({ show: true, msg: "Save Successfully ✅", type: "success" });
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };

      setList([...list, newItem]);
      setName(" ");
      setAlert({ show: true, msg: "Successfully ✅", type: "success" });
    }
  };

  const removeItem = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
    setAlert({ show: true, msg: "Delete Successfully ✅", type: "success" });
  };

  const editItem = (id) => {
    setCheckEditItem(true);
    setEditId(id);
    const searchItem = list.find((item) => item.id === id);
    setName(searchItem.title);
  };

  return (
    <section>
      <div className="container">
        <form className="form-group" onSubmit={submitData}>
          <h2>To-Do List ✍️</h2>
          {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
          <div className="form-control">
            <input
              type="text"
              className="text-input"
              placeholder="Add your text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button type="submit" className="submit-btn">
              {checkEditItem ? "Edit" : "Add"}
            </button>
          </div>

          <div className="list-container">
            {list.map((data, index) => {
              return (
                <List
                  key={index}
                  {...data}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
