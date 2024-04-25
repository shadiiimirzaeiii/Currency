import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="flex items-center py-2">
      <label htmlFor={name} className="mt-2 text-sm min-w-fit ml-4">
        {label}
      </label>
      <input
        className="w-full border-b text-center p-2"
        type="text"
        {...rest}
      />
    </div>
  );
};

export default Input;
