"use client";
import { useState } from "react";
import { Ellipsis, Bookmark, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Delete({ pinId }) {
  const [openThreeDotMenu, setOpenThreeDotMenu] = useState(false);
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
        alert("Pin deleted successfully");
      } else {
        alert("Failed to delete pin");
      }
    } catch (error) {
      console.error("Error deleting pin:", error);
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
        <li className="py-2 px-4 dark:hover:bg-slate-800/60 dark:text-[#abc2d3] hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-gray-600">
          <Bookmark />
          Make favorite
        </li>
        <li
          onClick={() => handleDelete(pinId)}
          className="py-2 px-4 dark:hover:bg-slate-800/60 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-red-500"
        >
          <Trash />
          Delete
        </li>
      </ul>
    </div>
  );
}
