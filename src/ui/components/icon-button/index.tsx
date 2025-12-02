import { PropsWithChildren } from "react";

export function IconButton({ children, onClick }: PropsWithChildren & { onClick: () => void }) {
  return (
    <button className="cursor-pointer" onClick={() => onClick()}>
      {children}
    </button>
  )
}