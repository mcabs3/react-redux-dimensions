export const sizes = {
  xs: {
    size: 576,
    q: 'max-width'
  },
  sm: {
    size: 576,
    q: 'min-width'
  },
  md: {
    size: 768,
    q: 'min-width'
  },
  lg: {
    size: 992,
    q: 'min-width'
  }
};

export const Screen = {
  xs(w) {
    return w <= sizes.xs.size;
  },
  sm(w) {
    return w >= sizes.sm.size;
  },
  md(w) {
    return w >= sizes.md.size;
  },
  lg(w) {
    return w >= sizes.lg.size;
  },
  size(w) {
    if (this.lg(w)) {
      return 'lg';
    } else if (this.md(w)) {
      return 'md';
    } else if (this.sm(w)) {
      return 'sm';
    }
    return 'xs';
  }
};