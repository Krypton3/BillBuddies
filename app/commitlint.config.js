module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-case': [2, 'always', 'sentence-case'],
      'subject-max-length': [2, 'always', 50],
    },
    ignores: [
      (commit) => {
        console.log("Checking commit:", commit); // Log commit messages
        return /^Merge /.test(commit);
      }
    ]
  };
  