# mini_ex_5
![screenshot](https://github.com/IdaBrauner/mini_ex_5/blob/master/bounceball.jpg)
https://rawgit.com/IdaBrauner/mini_ex_5/master/Mini_ex_5/empty-example/index.html


My plan was to make a game, where the yellow bar, bat, is supposed to be able to hit the bouncing ball. However it ended up being just a bouncing ball, because I had alot of trouble in making the bat able to hit the ball. I tried to look at some of Shiftmans videos and in the references at p5.js plays library, but I couldn't find a solution and ended up with a lot of frustration, since I didn't seem like such a difficult thing to create. So instead I ended up with this, and hopefully till next til I will have figured out how to make it possible. 
However, I did manage to make the ball bounce inside the blue rectangle, and a little bit inside the yellow rectangle, to create an effect of the ball bouncing on what is suppose to look like a beach. 

Both the ball and the bat is created by a class funtion. the class to create the bat is rather simple. It consists of a constructor with 2 values, called x and y. These were used for the rectangle. Then I created a method, function, called follow. This was to make the rectangle follow the mouses y position, however I tried stop the bat when the sand began, but I couldn't find a solution for this.
Then I made a class for the ball. I had the constructor with 4 values, x,y,speed,yspeed. Then I gave it 3 methods, bounce, display and move. 
The bounce method is making the ball bounce within the blue rectangle and a little bit on the "sand". 
The display method is the function that creates the ball.
The move method is making the ball move around.
the bounce and move method together makes it possible for the ball to bounce around. 

The way I see it, object oriented programming makes it possible for us to create games or other interaction possibilities with more details and to make it more advanced than if you're just using the basic p5.js library. Objected-oriented programming is in a way also a way of thinking. You have to decide what you want to make, and then break that thing down to smaller pieces, so you have to be consider all of the elements and functions that this thing has. 
Furthermore it is also a way of making the code more clear and create modularity and to make is easier to reuse the classes methods and attributes or just the methods. 

Extend/connect your game project to wider digital culture context, can you think of a digital example and describe how complex details and operations are being abstracted and encapsulated?
The way I see it, and please do correct me if i am wrong, abstraction is about creating classes that generally "fit" in alot of situations but they can also "fit" when more specific things are being done on fx a website.
I don't really see an obvious connection between my game and a wider digital culture context. But if you look at computergames in general, fx The Sims, you can fx make your sim execute different things such as play piano or make dinner at their home, but as they practice these things more, they get better at making dinner and new dishes will appear. So the videogame saves the data everytime the sim makes dinner and then knows whne to add new dishes. And then I see these different dishes as a way of abstraction. There are certain general things that the sim will always do when they cook, but depending on what they are making they are doing different things. 
