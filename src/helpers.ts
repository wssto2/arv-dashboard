export function joinPath(...paths: string[]): string {
  // Remove leading and trailing slashes
  paths = paths.map((path) => path.replace(/^\/|\/$/g, ""));

  // Join paths
  return paths.join("/");
}
