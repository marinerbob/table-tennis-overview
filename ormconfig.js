module.exports = {
  type: "sqlite",
  filename: "./server/db/tnnsDB.db",
  sychronize: false,
  entities: ["./server/src/entities/*.js"]
};
