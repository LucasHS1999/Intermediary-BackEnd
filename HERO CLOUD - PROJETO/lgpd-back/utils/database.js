import { Sequelize } from "sequelize";

const sequelize = new Sequelize("lgpd-database", "root", "dds21231", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
  define: {
    timestamps: false,
  },
});

export default sequelize;
