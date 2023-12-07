import { Components } from "react-markdown";

export const components: Partial<Components> = {
  h1: ({ children, ...rest }) => (
    <h1 className="text-3xl text-blue-900/[0.8]">{children}</h1>
  ),
  h2: ({ children, ...rest }) => (
    <h2 className="text-2xl text-blue-900/[0.8]">{children}</h2>
  ),
  h3: ({ children, ...rest }) => (
    <h3 className="text-xl text-blue-900/[0.8]">{children}</h3>
  ),
  h4: ({ children, ...rest }) => (
    <h4 className="text-lg text-blue-900/[0.8]">{children}</h4>
  ),
  h5: ({ children, ...rest }) => (
    <h5 className="text-md text-blue-900/[0.8]">{children}</h5>
  ),
};
