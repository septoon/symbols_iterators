class Team {
  constructor(...args) {
    this.args = args;
  }

  getIter() {
    let from = 0;
    const to = this.args.length - 1;
    return {
      [Symbol.iterator]: () => ({
        next: () => {
          if (from <= to) {
            return {
              value: this.args[from++], // eslint-disable-line no-plusplus
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      }),
    };
  }
}

export default Team;
