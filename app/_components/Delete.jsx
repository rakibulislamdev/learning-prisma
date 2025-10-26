"use client";
import { useState } from "react";
import { Ellipsis, SquarePen, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import EditModal from "./EditModal";
import { toast } from "react-toastify";

export default function Delete({ pinId, pinTitle }) {
  const [openThreeDotMenu, setOpenThreeDotMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    content: "",
  });

  const router = useRouter();

  const handleDelete = async (pinId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/pin/${pinId}/delete`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        router.refresh();
        toast.success(`${pinTitle} deleted successfully`);
      } else {
        toast.error("Failed to delete pin");
      }
    } catch (error) {
      console.error("Error deleting pin:", error);
    }
  };

  // EDIT handler (fetch data + open modal)
  const handleEdit = async (pinId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/pin/${pinId}`);
      if (response.ok) {
        const data = await response.json();
        setFormData({
          title: data.title,
          description: data.description,
          type: data.type,
          content: data.content,
        });
        setOpenModal(true);
        setOpenThreeDotMenu(false);
      } else {
        toast.error("Failed to fetch pin data for editing");
      }
    } catch (error) {
      console.error("Error fetching pin data:", error);
    }
  };

  // UPDATE handler (sent to modal)

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/pin/${pinId}/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success(`${formData.title} updated successfully`);
        setOpenModal(false);
        router.refresh();
      } else {
        toast.error("Failed to update pin");
      }
    } catch (error) {
      console.error("Error updating pin:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <Ellipsis
        className="text-gray-700 dark:text-[#abc2d3] text-[1.2rem] cursor-pointer"
        onClick={() => setOpenThreeDotMenu(!openThreeDotMenu)}
      />

      <ul
        className={`${
          openThreeDotMenu
            ? "translate-y-0 opacity-100 z-20 h-auto"
            : "translate-y-[-10px] opacity-0 z-[-1] h-0"
        } transition-all duration-200 bg-white w-max boxShadow py-1 rounded-md dark:bg-slate-900 absolute top-6 right-0`}
      >
        <li
          onClick={() => handleEdit(pinId)}
          className="py-2 px-4 dark:hover:bg-slate-800/60 dark:text-[#abc2d3] hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-gray-600"
        >
          <SquarePen />
          Edit
        </li>
        <li
          onClick={() => handleDelete(pinId)}
          className="py-2 px-4 dark:hover:bg-slate-800/60 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-red-500"
        >
          <Trash />
          Delete
        </li>
      </ul>

      {openModal && (
        <EditModal
          formData={formData}
          setFormData={setFormData}
          onCloseModal={() => setOpenModal(false)}
          handleUpdate={handleUpdate}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
