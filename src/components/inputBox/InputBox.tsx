const InputBox = ({
  type,
  placeholder,
  hookRef,
  error,
}: {
  type: string;
  placeholder: string;
  hookRef: any | undefined;
  error?: any;
}) => {
  return (
    <input
      type={type}
      className={`shadow-sm border-gray-300 rounded-lg focus:ring-2 ${
        error
          ? "focus:ring-red-200 focus:border-red-400"
          : "focus:ring-purple-200 focus:border-purple-400"
      }  w-full`}
      placeholder={placeholder}
      {...hookRef}
    />
  );
};

export default InputBox;
