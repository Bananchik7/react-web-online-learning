const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Accounts = sequelize.define("Accounts", {
  AccountID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  LoginAccount: {
    type: DataTypes.STRING,
    unique: true,
  },
  PasswordAccount: { type: DataTypes.STRING },
});

const Help = sequelize.define("Help", {
  HelpID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Subject: {
    type: DataTypes.STRING,
  },
  TextHelp: { type: DataTypes.STRING },
});

const Materials = sequelize.define("material", {
  MaterialID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
  },
  Video: {
    type: DataTypes.STRING,
  },
  File: {
    type: DataTypes.STRING,
  },
  GroupID: {
    type: DataTypes.INTEGER,
  },
  ItemID: {
    type: DataTypes.INTEGER,
  },
  MonthID: {
    type: DataTypes.INTEGER,
  },
});

const GroupStudents = sequelize.define("GroupStudents", {
  GroupID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
  },
});

const Items = sequelize.define("Items", {
  ItemID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
  },
});

const Months = sequelize.define("Months", {
  MonthID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
  },
});

const TopicInfos = sequelize.define("TopicInfos", {
  TopicInfoID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Topic: {
    type: DataTypes.STRING,
  },
  DateTopic: {
    type: DataTypes.DATE,
  },
  HomeWork: {
    type: DataTypes.STRING,
  },
});

const Grades = sequelize.define("Grades", {
  GradeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Grade: {
    type: DataTypes.INTEGER,
  },
  DataGrade: {
    type: DataTypes.DATE,
  },
});

const Students = sequelize.define("Students", {
  StudentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  LastName: {
    type: DataTypes.STRING,
  },
  FirstName: {
    type: DataTypes.STRING,
  },
  SurName: {
    type: DataTypes.STRING,
  },
});

//Materials.hasOne(GroupStudents, {
//  foreignKey: "GroupID",
//});
//GroupStudents.belongsTo(Materials);

//Materials.hasOne(Items, {
//  foreignKey: "ItemID",
//});
//Items.belongsTo(Materials);

//Materials.hasOne(Months, {
//  foreignKey: "MonthID",
//});
//Months.belongsTo(Materials);

//TopicInfos.hasOne(Items);
//Items.belongsTo(TopicInfos);

//TopicInfos.hasOne(GroupStudents);
//GroupStudents.belongsTo(TopicInfos);

//Grades.hasOne(Students);
//Students.belongsTo(Grades);

//Grades.hasOne(Items);
//Items.belongsTo(Grades);

//Students.hasOne(GroupStudents);
//GroupStudents.belongsTo(Students);

module.exports = {
  Accounts,
  Help,
  Materials,
  GroupStudents,
  Items,
  Months,
  TopicInfos,
  Grades,
  Students,
};
