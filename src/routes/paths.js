function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT = "/";

export const PATH_BUDGET = {
  root: ROOT,
  general: {
    home: path(ROOT, "dashboard"),
  },
};
