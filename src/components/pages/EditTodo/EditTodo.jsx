import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import {editTodo} from '../../../feature/Todo/TodoSlice';
import toast from 'react-hot-toast';


const EditTodo = ({ setEditOpen, EditData }) => {
  console.log(EditData , "eeee")
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [data, setData] = useState({});
  console.log(data , "1234")
  const { id, task } = EditData;
  console.log(task , "12345")

  const dispatch = useDispatch();

  useEffect(() => {
    setData(task);
    
  }, [task]); 

  const handleEdit = () => {
    // Display a loading toast while simulating the save operation
    const promise = new Promise((resolve,reject) => {
      setTimeout(() => {
        //TODO: Will add promise below 
        const success = true;
        if (success) {
          resolve('success');
        } else {
          reject('error');
        }
      }, 1000); 
    });
  
    toast.promise(
      promise,
      {
        loading: 'Saving...',
        success: <b> Saved Successfully!</b>,
        error: <b>Could not save.</b>,
      }
    ).then(() => {
        dispatch(editTodo({ id, data }));
        setEditOpen(false);
       
    }).catch((error)=>{
      console.log(error)
    });
  };

  return (
    <div>
      {/* ---------Edit Code Start -------- */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="fixed inset-0 bg-gray-20 bg-opacity-75 transition-opacity backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0  sm:h-10 sm:w-10">
                        <i className="fa-solid fa-file-pen text-blue-600" style={{fontSize:"1.3rem"}}></i>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Edit My Task
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            <div className="sm:col-span-4">
                              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Task Name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    type="text"
                                    name="username"
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                    id="username"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                  />
                                </div>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setEditOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleEdit}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* --------Edit Code End------- */}
    </div>
  );
};

export default EditTodo;
