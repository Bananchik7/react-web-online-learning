const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Accounts = sequelize.define("Accounts", {
  AccountID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  LoginAccount: {
    type: DataTypes.STRING,
    unique: true,
  },
  PasswordAccount: { type: DataTypes.STRING },
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

const Help = sequelize.define("Help", {
  HelpID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Subject: {
    type: DataTypes.STRING,
  },
  TextHelp: { type: DataTypes.STRING },
});

const Materials = sequelize.define("Materials", {
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

const Grades = sequelize.define("Grades", {
  GradeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  StudentID: {
    type: DataTypes.INTEGER,
  },
  ItemID: {
    type: DataTypes.INTEGER,
  },
  GroupID: {
    type: DataTypes.INTEGER,
  },
  Grade: {
    type: DataTypes.STRING,
  },
  DataGrade: {
    type: DataTypes.DATE,
  },
  MonthID: {
    type: DataTypes.INTEGER,
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

const TopicLessons = sequelize.define("TopicLessons", {
  TopicID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TextTopic: {
    type: DataTypes.STRING,
  },
  HomeTopic: {
    type: DataTypes.STRING,
  },
  GroupID: {
    type: DataTypes.INTEGER,
  },
  ItemID: {
    type: DataTypes.INTEGER,
  },
  Data: {
    type: DataTypes.DATE,
  },
  MonthID: {
    type: DataTypes.INTEGER,
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
  Grades,
  Students,
  TopicLessons,
};
