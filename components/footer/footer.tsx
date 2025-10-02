import React from "react";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer className="flex items-center justify-center py-10 text-sm text-gray-600">
        © {currentYear} Rohan Gautam. All rights reserved.
      </footer>
    </>
  );
}
