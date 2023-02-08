

INSERT INTO directions_table
    (id, title, prep_time, directions)
VALUES
    (1,'Pasta Salad', "20 mins", "Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.", ),

    (4, 'Chocolate cake', "1 hour 30 mins", ""),

    (5, 'Tahini Lentils', "In a jug, mix the tahini with the zest and juice of the lemon and 50ml of cold water to make a runny dressing. Season to taste, then set aside.\r\nHeat the oil in a wok or large frying pan over a medium-high heat. Add the red onion, along with a pinch of salt, and fry for 2 mins until starting to soften and colour. Add the garlic, pepper, green beans and courgette and fry for 5 min, stirring frequently.\r\nTip in the kale, lentils and the tahini dressing. Keep the pan on the heat for a couple of mins, stirring everything together until the kale is wilted and it’s all coated in the creamy dressing.")

    -- list of recipes 
    -- easy meals associate with ID + 10 ingredients 
    -- recipe ID inside each ingredient
    -- column with array of ingredients 
    -- ingredients columns ID 


Recipe(table)
 • recipe_id int primary_key auto_increment
 • food_category_id int foreign_key
 • recipe_name varchar
 • recipe_description varchar
 • prep_time time
 • cook_time time

Food Category(table)
 • food_category_id int primary_key auto_increment
 • food_category_name varchar


Measurements(table)
 • measurement_id int primary_key auto_increment
 • measurement_name varchar

Recipe Steps(table)
 • step_id int primary_key auto_increment
 • recipe_id int foreign_id
 • step_number int
 • step_description varchar

 
 