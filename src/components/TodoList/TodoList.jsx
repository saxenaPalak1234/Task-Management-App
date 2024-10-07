import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "../../feature/Todo/TodoSlice";
import EditTodo from "../pages/EditTodo/EditTodo";
import { useState } from "react";
import toast from "react-hot-toast";
import "./todolist.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log("My todo Sample", todos);
  const dispatch = useDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [EditData, SetEditData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(EditData, "editData");

  const handleEditButtonClick = (id, task) => {
    setEditOpen(true);
    SetEditData({ id, task });
  };

  console.log(todos.length);

  function handleDelete(id, item) {
    const toastMessage = (
      <span>
        <b>{item}</b> deleted successfully
      </span>
    );
    dispatch(deleteTodo(id));
    toast(toastMessage, {
      icon: "🙃",
      style: {
        borderRadius: "10px",
        background: "white",
        color: "black",
      },
    });
  }

  const handleToggleCompletion = (id) => {
    dispatch(toggleTodoStatus({ id }));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-white">
        <Navbar />
        <div
          className="relative isolate px-6 pt-14 lg:px-8"
          style={{ width: "70rem", margin: "auto" }}
        >
          <div className="flex justify-between py-5">
            <input
              type="text"
              placeholder="Search Todos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              className="border rounded px-4 py-2"
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div className="flex justify-between gap-x-4 py-5">
            <Link to="/">
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  marginTop: "30px",
                }}
              >
                Back
              </button>
            </Link>
            <Link to="/addtodo">
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  marginTop: "30px",
                }}
              >
                Add Todo
              </button>
            </Link>
          </div>

          <table className="w-full">
            <tbody>
              {filteredTodos.length >= 1 ? (
                filteredTodos.map((item, index) => (
                  <tr
                    key={item.id}
                    className="flex justify-between gap-x-4 py-5 bg-white m-2 my-4 border rounded-lg"
                  >
                    <td
                      className="flex min-w-0 items-center"
                      style={{ flex: 3 }}
                    >
                      <div className="min-w-0 flex-auto">
                        <h1 className="font-semibold leading-6 text-gray-900">
                          <i className="fa-solid fa-circle-info px-4"></i>
                          {item.taskName}
                        </h1>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500 px-4">
                          Task no {index + 1}
                        </p>
                      </div>
                    </td>
                    <td
                      className="flex gap-x-4 px-4 items-center"
                      style={{ flex: 1 }}
                    >
                      <div className="flex gap-x-3">
                        <button
                          className="text-sm leading-6 text-gray-500 bg-green-100 hover:bg-green-200 focus:outline-none focus:underline px-2 py-1 rounded-md"
                          onClick={() =>
                            handleEditButtonClick(item.id, item.taskName)
                          }
                        >
                          Edit{" "}
                        </button>
                        <button
                          className="text-sm leading-6 text-gray-500 bg-red-100 hover:bg-red-200 focus:outline-none focus:underline px-2 py-1 rounded-md"
                          onClick={() => handleDelete(item.id, item.task)}
                        >
                          Delete{" "}
                        </button>
                      </div>
                      <button
                        className="text-sm leading-6 text-gray-500 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:underline px-2 py-1 rounded-md"
                        onClick={() => handleToggleCompletion(item.id)}
                      >
                        {item.isCompleted ? "Mark Incomplete" : "Mark Complete"}
                      </button>
                    </td>
                    {/* New column for completion status */}
                    <td className="px-4" style={{ flex: 1 }}>
                      <span
                        className={`font-semibold ${
                          item.isCompleted ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.isCompleted ? "Completed" : "Not Completed"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    <div className="text-black bg-dark">
                      <h1>
                        <b>No Task Added</b>
                      </h1>
                      <p>
                        Please click on <b>Add Todo</b> to add a task
                      </p>
                    </div>
                  </td>
                </tr>
              )}
              {editOpen ? (
                <EditTodo setEditOpen={setEditOpen} EditData={EditData} />
              ) : (
                ""
              )}
            </tbody>
          </table>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
