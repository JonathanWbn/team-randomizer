import { forwardRef, useState } from "react";

export const MemberInput = forwardRef<
  HTMLInputElement,
  { onSubmit: (members: string[]) => void }
>(function MemberInput({ onSubmit }, inputRef) {
  const [input, setInput] = useState<string>("");

  function handleSubmit() {
    if (!input) return;

    const members = input.split(",").map((name) => name.trim());
    onSubmit(members);
    setInput("");
  }

  return (
    <div className="relative flex items-center">
      <input
        ref={inputRef}
        type="text"
        value={input}
        tabIndex={1}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Add team member"
        autoFocus
        className="block w-full rounded-xl border-0 px-5 py-4 pr-14 tracking-wider text-gray-900 drop-shadow-sm transition placeholder:text-gray-400 hover:drop-shadow-md focus:ring-0 focus:drop-shadow-md"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <div
        className="absolute inset-y-0 right-0 flex py-3 pr-3 hover:cursor-pointer"
        onClick={() => {
          handleSubmit();
        }}
      >
        <kbd className="inline-flex items-center rounded border border-gray-200 px-2 pt-1 font-sans text-xs text-gray-400">
          ↵
        </kbd>
      </div>
    </div>
  );
});
