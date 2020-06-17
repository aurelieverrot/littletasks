# Little Tasks

Covid-19 striked while I was preparing my Software Engineering bootcamp. With two kids at home, I had to be a mom and a teacher while being a student connected online from 9am to 5pm.
My kids were in 3rd and 5th grade, with a lot to do everyday on their computers. But what an 11 year old will do with a computer when his parents can't supervise? Write a piece of opinion about a book? or spend his day on Youtube to watch soccer videos?

I imagined something to help them take responsability of their workload everyday: a to-do list -- with rewards!
It helps parents to keep track of what they have to do everyday, what has been done, and gives the kids some motivation to stay focus.

![Screenshot 1](https://raw.githubusercontent.com/aurelieverrot/littletasks/master/Screen%20Shot%202020-06-16%20at%204.56.26%20PM.png)
![Screenshot 1](https://raw.githubusercontent.com/aurelieverrot/littletasks/master/Screen%20Shot%202020-06-16%20at%204.57.27%20PM.png)

## Link to the Front End repository
https://github.com/aurelieverrot/littletasks-UI

## Stack
- MongoDB with Mongoose
- Express.js
- React.js
- Node.js
- React Semantic UI
- Moment JS

## What the app does
- User can see a list of kids
- User can create a task, and assigned it to one of his kid
- A task can be deleted from the database
- A task can be done, disappear from the list of task, but not from the database
- Kids have points
- User can filter tasks by kids
- Kids receive 1 point a day if they all their tasks are done.

## What the app doesn't do yet
[ ] To distribute points, a script needs to be launched everyday. I want to find a way to automate this for the script to be launched every night at 11:59pm (PST).  
[ ] Add, update, delete a kid.   
[ ] I want to create another model Reward. When the user click on a kid's name, he should be redirected to the kid's page where he will find the list of assigned task of the day, the number of points, a form to create a reward. When the user click on the reward, he can also see how many points need to be exchanged to redeem it. And finally, for each redeem the parent should receive an email.  
[ ] Authentication. A parent should be able to create an account, see only his kids. I would like to have kids' accounts as well with less power to let the kids use the app on their own device.  
[ ] Adapt the app for mobile use.  

