export const contributions: Record<
  string,
  {
    name: string;
    href: string;
    sourceHref?: string;
    technologies: string[];
  }
> = {
  "mui-icon-preview": {
    name: "MUI Icon Preview",
    sourceHref: "https://github.com/IgorBezanovic/mui-icon-preview",
    href: "https://marketplace.visualstudio.com/items?itemName=igorbezanovic.mui-icon-preview",
    technologies: ["VS Code", "Material UI", "SVG"],
  },
  "http-headers-validation": {
    name: "http-headers-validation",
    href: "https://www.npmjs.com/package/http-headers-validation",
    sourceHref: "https://github.com/SVasilev/http-headers-validation",
    technologies: ["npm", "Node.js", "TypeScript", "HTTP"],
  },
};
