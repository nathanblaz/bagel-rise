"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Checkins",
      [
        {
          userId: 1,
          listId: 1,
          review: "The bagel was fresh. A little dense. If you go there with your dog they give your dog a treat which is very sweet.",
          rating: 4,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/plain-bagel.jpg',
        },
        {
          userId: 2,
          listId: 2,
          review: "Everything made fresh and in-house! Quite amazing services and flexibility in tailoring foods. This spot will be my secret to-go on weekends!!",
          rating: 5,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/everything-bagel.jpg',
        },
        {
          userId: 3,
          listId: 3,
          review: "Incredible place. To leave the story untold I will admit that I witnessed the owner perform a act of sheer heroism. I visited with with Jersey people and ran into other Jersey people so it is safe to say the bagels are class. Great vegan fare.",
          rating: 3,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/cinnamon-raisin-bagel.jpg',
        },
        {
          userId: 4,
          listId: 4,
          review: "Always great. Love the breakfast bagels. Around 20 different fresh bagels available daily. Very friendly crew, Maria & Eric !!",
          rating: 5,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/blueberry-bagel.jpg',
        },
        {
          userId: 5,
          listId: 5,
          review: "Bagel had average to above average size/taste but the everything seasoning was pretty subpar and the lox spread nothing to write home to New York about but they do put a respectable amount on the bagel at least. Had high hopes for this place considering its proximity to my home but Beauty’s still holds the neighborhood crown. Most likely will not come back and would not recommend.",
          rating: 2,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/chocolate-chip-bagel.jpg',
        },
        {
          userId: 6,
          listId: 6,
          review: "Good bagels. Pleasant, hard working and friendly staff.",
          rating: 3,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/onion-bagel.jpg',
        },
        {
          userId: 7,
          listId: 7,
          review: "Excellent taste and texture. Decent price point . Great customer service. Wide options . Only complaint and reason I am giving 4 out of 5 , was they forgot my added jalepenos on my bagel and my partners added capers.",
          rating: 4,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/asiago-bagel.jpg',
        },
        {
          userId: 8,
          listId: 8,
          review: "Bagels are fresh and crispy outside, dense and chewy dough inside!",
          rating: 5,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/salt-bagel.jpg',
        },
        {
          userId: 9,
          listId: 9,
          review: "The breakfast bagels are tasty and very favorably priced!",
          rating: 4,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/poppy-seed-bagel.png',
        },
        {
          userId: 10,
          listId: 10,
          review: "My husband and I love their bacon, egg, and pepper jack cheese breakfast bagels on everything or garlic bagels. We’re regulars here (my husband mostly) and they’re super nice every time!",
          rating: 5,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/french-toast-bagel.jpg',
        },
        {
          userId: 11,
          listId: 11,
          review: "Reminds me of a lot of great delis, only the food tends to come out mediocre: dry meats, stale bread, cold fries. Pandemic life ain't easy on anyone.",
          rating: 4,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/egg-bagel.jpg',
        },
        {
          userId: 12,
          listId: 12,
          review: "Great customer service is so very important in the early morning hours. The team at this location is very polite, professional and they do their very best to get orders out as fast as humanly possible.",
          rating: 3,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/pumpernickle-bagel.jpg',
        },
        {
          userId: 13,
          listId: 13,
          review: "Always great. Love the breakfast bagels. Around 20 different fresh bagels available daily. Very friendly crew, Maria & Eric !!",
          rating: 5,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/pumpernickle-bagel.jpg',
        },
        {
          userId: 14,
          listId: 14,
          review: "Good bagels. Pleasant, hard working and friendly staff.",
          rating: 4,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/garlic-bagel.jpg',
        },
        {
          userId: 15,
          listId: 15,
          review: "Love the jalapeños bagel with cheese egg and bacon 👌",
          rating: 5,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/sesame-bagel.jpg',
        },
        {
          userId: 16,
          listId: 16,
          review: "Bagels always taste good, coffee is good if you’re wanting a basic cup, but I had a giant hair in my nova lox! Was smushed right on the tomato and hanging out of it- gross! Everyone working had dark hair except one employee. She seemed flustered when she kept asking people what was on their order and asked me what other sandwich I had aside from what I ordered (only had one sandwich). Start with keeping all your hair pulled back, including the little side bits, and breath. I’ve never had any issue here so that’s why it’s 3 stars.",
          rating: 3,
          image: 'https://worstroom.com/wp-content/uploads/2020/10/cheddar-bagel.jpg',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Checkins", null, {});
  },
};
