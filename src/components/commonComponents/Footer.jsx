import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        {/* <a
          href="https://github.com/Vineetsingh07"
          className="hover:underline"
          target="_blank"
        > */}
        Vineet Singh™
        {/* </a> */}. All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
