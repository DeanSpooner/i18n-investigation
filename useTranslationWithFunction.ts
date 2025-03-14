import { useTranslation } from "react-i18next";

// Custom hook to handle translations like functions
export const useTranslationWithFunction = () => {
  const { t } = useTranslation();

  const formatArgument = (arg: any, format: string) => {
    if (format && typeof arg !== format) {
      throw new Error(`Expected arg of type ${format}, received arg of type ${arg} instead.`)
    }
    if (format === "number" && typeof arg === "number") {
      return arg.toLocaleString(); // Format the number with locale-specific formatting
    }
    if (format === "string" && typeof arg === "string") {
      return arg; // Format the number with locale-specific formatting
    }
    return arg; // If no specific format, return the argument as-is
  };

  // Allow translations to be called like a function with arguments
  const translate = (key: string) => (...args: any[]) => {
    // Create an object where keys are dynamically set as {0}, {1}, {2}, ...
    const interpolationObj = args.reduce((acc, arg, index) => {
      // Match format specifiers like :number or |numberFormat
      const formatMatch = key.match(new RegExp(`\\{${index}:([^}]+)\\}`));
      const format = formatMatch ? formatMatch[1] : null; // Extract the format from the key
      acc[index] = format ? formatArgument(arg, format) : arg; // Apply the format if specified
      return acc;
    }, {});

    // Return the translated string with the formatted arguments, ensure it's a string
    const translationResult = t(key, interpolationObj);

    // Ensure the result is a string before passing to Text
    return typeof translationResult === "string" ? translationResult : String(translationResult);
  };

  return { translate };
};
