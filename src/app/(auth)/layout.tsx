import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="max-w-screen-sm mx-auto p-5">{children}</div>;
}
