import React from "react";

export default function Footer() {
  return (
    <footer className="p-2 bg-neutral-200 shadow md:px-2 md:py-4 dark:bg-gray-900 w-full bottom-0">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          DansMultiPro™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
