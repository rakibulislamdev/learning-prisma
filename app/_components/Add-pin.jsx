"use client";

import { createPin } from "../server";

const AddPin = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await createPin(formData);
    if (result.success) {
      alert(result.message);
      e.target.reset();
    } else {
      alert("Failed to create pin: " + result.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="w-full max-w-md bg-white dark:bg-medium-dark p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <h2 className="text-xl font-semibold">Add a New Pin</h2>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="w-full">
            <label
              htmlFor="Title"
              className="text-[15px] dark:text-slate-300 text-[#424242] font-medium"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="Title"
              placeholder="Your title goes here"
              className="border-[#e5eaf2] dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="Description"
              className="text-[15px] dark:text-slate-300 text-[#424242] font-medium"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="description"
              id="Description"
              placeholder="Your description goes here"
              className="border-[#e5eaf2] dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="Type"
              className="text-[15px] dark:text-slate-300 text-[#424242] font-medium"
            >
              Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="type"
              id="Type"
              placeholder="Your type goes here"
              className="border-[#e5eaf2] dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="Content"
              className="text-[15px] dark:text-slate-300 text-[#424242] font-medium"
            >
              Content <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="content"
              id="Content"
              placeholder="Your content goes here"
              className="border-[#e5eaf2] dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-5 py-2 rounded-md bg-amber-300 hover:bg-amber-400"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPin;
