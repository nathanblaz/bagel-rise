"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "BagelShops",
      [
        {
          name: "Dee Spot",
          address: "1195 65th St",
          city: "Oakland",
          state: "CA",
          zipcode: "94608",
          phone: "+15108797026",
          information:
            "LGBTQ friendly, Identifies as veteran-led, Identifies as women-led",
        },
        {
          name: "Murray's Bagels",
          address: "500 6th Ave",
          city: "New York",
          state: "NY",
          zipcode: "10011",
          phone: "+12124622830",
          information:
            "Classic New York-style bagels offered with an array of spreads & smoked fish & an all-day deli menu.",
        },
        {
          name: "Kupel's Bakery",
          address: "421 Harvard St",
          city: "Brookline",
          state: "MA",
          zipcode: "02445",
          phone: "+16175669528",
          information:
            "Kosher bakery drawing crowds with ample bagel flavors & spreads, plus pastries such as bear claws.",
        },
        {
          name: "Philly Style Bagels",
          address: "1451 E Columbia Ave",
          city: "Philadelphia",
          state: "PA",
          zipcode: "19125",
          phone: "",
          information:
            "Corner take-out spot specializing in small-batch bagels with malty flavor, plus sandwiches.",
        },
        {
          name: "Back Alley Bagel",
          address: "N Curley St",
          city: "Baltimore",
          state: "MD",
          zipcode: "21224",
          phone: "",
          information: "Curbside pickup",
        },
        {
          name: "Blocks Bagels",
          address: "59 Spruce St",
          city: "Columbus",
          state: "OH",
          zipcode: "43215",
          phone: "+16144567263",
          information: "Outdoor seating, Staff wear masks",
        },
        {
          name: "Rise Bagel Co.",
          address: "530 N 3rd St",
          city: "Minneapolis",
          state: "MN",
          zipcode: "55401",
          phone: "+16123543349",
          information:
            "Modern, daytime counter serve providing artisanal, organic bagels in a minimalist, brick interior.",
        },
        {
          name: "Wholy Bagel",
          address: "3637 Far W Blvd",
          city: "Austin, TX 78731",
          state: "TX",
          zipcode: "78731",
          phone: "+15129920003",
          information: "Identifies as women-led",
        },
        {
          name: "Belle's Bagels",
          address: "5022 York Blvd",
          city: "Los Angeles",
          state: "CA",
          zipcode: "90042",
          phone: "+13237396336",
          information: "Delivery, In-store pickup, Takeout",
        },
        {
          name: "Bernstein's Bagels",
          address: "816 N Russell St",
          city: "Portland",
          state: "OR",
          zipcode: "97227",
          phone: "+15038831222",
          information: "Wheelchair accessible entrance",
        },
        {
          name: "Blazing Bagels",
          address: "2510 NE Blakeley St",
          city: "Seattle",
          state: "WA",
          zipcode: "98105",
          phone: "+12064201371",
          information: "Comfort food, Coffee, Quick bite, Vegetarian options",
        },
        {
          name: "Boultawns Bagels",
          address: "226 N Guadalupe St",
          city: "Santa Fe",
          state: "NM",
          zipcode: "87501",
          phone: "505-983-9006",
          information:
            "We offer dine-in, patio seating, take out and delivery.",
        },
        {
          name: "The Bagel Project",
          address: "779 S 500 E",
          city: "Salt Lake City",
          state: "UT",
          zipcode: "84102",
          phone: "+18019060698",
          information: "Breakfast",
        },
        {
          name: "Brooklyn Bagels of Wellington",
          address: "13873 Wellington Trace # B9",
          city: "Wellington",
          state: "FL",
          zipcode: "33414",
          phone: "+15617845501",
          information: "Identifies as women-led",
        },
        {
          name: "The Bagel Restaurant and Deli",
          address: "3107 N Broadway",
          city: "Chicago",
          state: "IL",
          zipcode: "60657",
          phone: "+17734770300",
          information:
            "Jewish deli/diner with an extensive menu that includes faves like bagels, blintzes & matzo balls.",
        },
        {
          name: "Bagels Forever",
          address: "2947 University Ave",
          city: "Madison",
          state: "WI",
          zipcode: "53705",
          phone: "+16082312427",
          information: "Easygoing stop for coffee & bagels",
        },
        {
          name: "101 Bagel Cafe",
          address: "2955 Cobb Pkwy SE Suite 240",
          city: "Atlanta",
          state: "GA",
          zipcode: "30339",
          phone: "+17709889991",
          information:
            "Curbside pickup, No-contact delivery, Delivery, In-store pickup, In-store shopping, Takeout, Dine-in, Same-day delivery",
        },
        {
          name: "Beauty's Bagel Shop",
          address: "3838 Telegraph Ave",
          city: "Oakland",
          state: "CA",
          zipcode: "94609",
          phone: "+15107886098",
          information:
            "Contemporary bakery serving wood-fired Montreal-style bagels, bagel sandwiches & espresso drinks.",
        },
        {
          name: "Boichik Bagels",
          address: "3170 College Ave",
          city: "Berkeley",
          state: "CA",
          zipcode: "94705",
          phone: "",
          information:
            "Patrons line up for vegan, kosher, New York-style bagels with organic elements at this buzzy shop.",
        },
        {
          name: "Levy's Bagels & Co",
          address: "730 Atlantic Ave",
          city: "Alameda",
          state: "CA",
          zipcode: "94501",
          phone: "+15105231080",
          information:
            "Strip-mall shop serving standard homemade bagels & deli sandwiches at the counter in a simple space.",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("BagelShops", null, {});
  },
};
