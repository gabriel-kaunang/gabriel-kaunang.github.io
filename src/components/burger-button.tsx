"use client";

export function BurgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center rounded-md"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative w-6 h-3">
        {/* Top line */}
        <div
          className={`absolute w-full h-[1px] transform transition-all duration-300 ${
            isOpen
              ? "rotate-45 translate-y-2.5 bg-white"
              : "translate-y-1 bg-black"
          }`}
        />

        {/* Middle line */}
        {/* <div
          className={`absolute w-full h-0.5 transform transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          } translate-y-2.5`}
        /> */}

        {/* Bottom line */}
        <div
          className={`absolute w-full h-[1px] transform transition-all duration-300 ${
            isOpen
              ? "-rotate-45 translate-y-2.5 bg-white"
              : "translate-y-4 bg-black"
          }`}
        />
      </div>
    </button>
  );
}
