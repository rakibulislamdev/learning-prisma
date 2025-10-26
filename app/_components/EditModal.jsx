import { X } from "lucide-react";

export default function EditModal({
  formData,
  setFormData,
  onCloseModal,
  handleUpdate,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-white dark:bg-medium-dark w-[400px] p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onCloseModal}
        >
          <X size={18} />
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">Edit Pin</h2>

        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          {["title", "description", "type", "content"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="text-[15px] dark:text-slate-300 text-[#424242] font-medium"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id={field}
                name={field}
                type="text"
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className="border-[#e5eaf2] dark:bg-transparent dark:border-slate-600 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-amber-300 hover:bg-amber-400 text-black rounded-md py-2 mt-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
