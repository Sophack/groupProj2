INSERT INTO ingredients (id, ingredients,)
VALUES (1, "pasta salad", "mozzarella balls, baby plum tomatoes, fresh basil, farfalle, extra virgin olive oil, green olives, tuna, salt, pepper" ),
       (2, "vegan lasagna", "gourmet meals"),
       (3, "peanut butter cookies", "snacks"),
       (4, "chocolate cake", "dessert"),
       (5, "tahini lentils", "easy meals");
       
-- should be inserting an array into the ingredients collumns 

INSERT INTO ingredients
    (id, category_name)
VALUES
    ('Snacks'),
    ('Easy Meals'),
    ('Gourmet meals'),
    ('Desserts');
