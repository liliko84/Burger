# Burger
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

Your app will store every burger in a database, whether devoured or not.

Inside your burger directory, create a folder named db.

In the db folder, create a file named schema.sql. 
Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

Run the schema.sql and seeds.sql files into the mysql server from the command line

Now you're going to run these SQL files.

Make sure you're in the db folder of your app.

Start MySQL command line tool and login: mysql -u root -p.

With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

Close out of the MySQL command line tool: exit.

C