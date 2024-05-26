import { ITitleProps } from "./types";

function Title({ children, align, className, ...props }: ITitleProps) {
  return <h2 {...props} className={className} >
    {children}
  </h2>;
}

export default Title;
