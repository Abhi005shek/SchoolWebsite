import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function DropDownItems({ children, text, isOpen, setIsOpen }) {
  return (
    <li
      className="relative cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <p className="flex items-center gap-1 hover:text-textColor active:text-textColor ">
        <span>{text}</span>
        <span>{isOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</span>
      </p>

      {isOpen && (
        <div
          className="text-sm flex z-50 flex-col min-w-48 relative md:absolute divide-y bg-slate-500 py-2 px-1"
          onMouseEnter={() => setIsOpen(true)}
        >
          {children}
        </div>
      )}
    </li>
  );
}

export default DropDownItems;
