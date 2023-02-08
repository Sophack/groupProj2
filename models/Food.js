const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

//same as the before exercises 
//but there is a routes with API 
//it uses the book model we inputted 
//
class Book extends Model {}


// Recipe(table)
//  • recipe_id int primary_key auto_increment
//  • food_category_id int foreign_key
//  • recipe_name varchar
//  • recipe_description varchar
//  • prep_time time
//  • cook_time time

// Food Category(table)
//  • food_category_id int primary_key auto_increment
//  • food_category_name varchar

// Measurements(table)
//  • measurement_id int primary_key auto_increment
//  • measurement_name varchar

// Recipe Steps(table)
//  • step_id int primary_key auto_increment
//  • recipe_id int foreign_id
//  • step_number int
//  • step_description varchar

 

Recipe.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
      //not all of these are 'required' on the bookRoutes 
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;
