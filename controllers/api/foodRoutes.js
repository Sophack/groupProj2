const router = require('express').Router();

// Import the model
const Recipe = require('../../models/Food');

// CREATE a recipe
router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  // `INSERT INTO` in plain SQL

  //use the model, call the create function & pass what needs to be passed 
  //for multiples you can use the bulkCreate function 
  Recipe.create({
    //getting user input
    title: req.body.title,
    directions: req.body.directions,
    category: req.body.category,
    prep_time: req.body.prep_time
  })
    //call back function  
    .then((newRecipe) => {
      // Send the newly created row as a JSON object
      res.json(newRecipe);
    })
    //to handle the error
    .catch((err) => {
      res.json(err);
    });
});

// CREATE multiple entries
router.post('/controllers', (req, res) => {
  // Multiple rows can be created with `bulkCreate()` and an array
  // This could also be moved to a separate Node.js script to ensure it only happens once
  Recipe.bulkCreate([

    //array of an object so we can pass multiple entries in the table (this is the same as 'insert into' from SQL)
    {
      //static data 
      //generating som edata before starting application
      title: 'Pasta Salad',
      directions: 'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
      category: 'easy meals',
      prep_time: '20 mins'

    },
    {
      title: 'Pasta Salad',
      directions: 'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
      category: 'easy meals',
      prep_time: '20 mins'

    },
    {
      title: 'Pasta Salad',
      directions: 'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
      category: 'easy meals',
      prep_time: '20 mins'

    },
    {
      title: 'Pasta Salad',
      directions: 'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
      category: 'easy meals',
      prep_time: '20 mins'

    }
    
  ])
    .then(() => {
      res.send('Family recipe database seeded!');
    })
    //the catch error will catch all errors instead of having to put it every time 
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;



