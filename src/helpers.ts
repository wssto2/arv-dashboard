export function joinPath(...paths: string[]): string {
  // Remove leading and trailing slashes
  paths = paths.map((path) => path.toString().replace(/^\/|\/$/g, ""));

  // Join paths
  return paths.join("/");
}

// Format a date string to a human-readable format DD.MM.YYYY.
export function formatDate(date: string): string {
  if (
    date.startsWith("0000-00-00") ||
    date.startsWith("1970-01-01") ||
    date.startsWith("0001-01-01")
  ) {
    return "";
  }

  const dateObj = new Date(date);

  // Return null if the date is invalid
  if (isNaN(dateObj.getTime()) || dateObj.getTime() <= 0) {
    return "";
  }

  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}.`;
}

export function formatDateTime(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

// Format a number to a human-readable format with a specified number of decimals.
// eg. 1234.5678 -> 1.234,57
export function formatNumber(
  number: number | string,
  decimals: number = 0
): string {
  if (!number) {
    return "0";
  }

  if (decimals < 0) {
    throw new Error("Decimals must be a positive number.");
  }

  if (typeof number === "string") {
    number = number.replace(",", ".");
  }

  // Convert number to string and split it into parts
  number = Number(number);

  if (isNaN(number)) {
    return "0";
  }

  const parts = number.toFixed(decimals).split(".");

  // Add thousands separator
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (decimals === 0) {
    return parts[0];
  }

  return parts.join(",");
}

export function debounce(func: Function, wait: number): Function {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function randString(length: number): string {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return result;
}
