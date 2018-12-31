module.exports = function() {
  return {
    files: ["*.js", "interview/*.js", "core/*.js"],

    tests: ["tests/*.test.js"],

    testFramework: "tape",
    env: {
      type: "node",
      runner: "node"
    }
  }
}
