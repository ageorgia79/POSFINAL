'use strict';

   var categories = [
      "Entrees",
      "Appetizers",
      "Salads",
      "Soups",
      "Baskets",
      "Kids",
      "Low Fat",
      "SideItems",
      "Dessert",
      "Beverages",
      "Beer",
      "Wine",
      "Liquor",
      "Cocktails",
    ]
        ///////////////////////////////////////////////////ENTREES///////////////////////////////////////////////////////
    var items = [
        {
          "category": "Entrees",
          "name": "Prime Rib",        //Prime Rib
          "price": "21.95",
          "options": [
            "Rare",
            "MedRare",                            
            "Medium",
            "MedWell",
            "Well",
            "Butterfly",
            "Pittsburg"
          ], 
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        {
          "category": "Entrees",
          "name": "NY Strip",         //NY Strip
          "price": "18.95",
          "options": [
            "Rare",
            "MedRare",
            "Medium",
            "MedWell",
            "Well",
            "Butterfly",
            "Pittsburg"
          ], 
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        {
          "category": "Entrees",
          "name": "18oz Ribeye",        //Ribeye
          "price": "19.95",
          "options": [
            "Rare",
            "MedRare",
            "Medium",
            "MedWell",
            "Well",
            "Butterfly",
            "Pittsburg"
          ], 
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        {
          "category": "Entrees",
          "name": "Filet Mignon",       //Filet
          "price": "29.95",  
          "options": [
            "Rare",
            "MedRare",
            "Medium",
            "MedWell",
            "Well",
            "Butterfly",
            "Pittsburg"
          ], 
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        {
          "category": "Entrees",
          "name": "Salmon",         //Salmon
          "price": "17.95",
          "options": [
            "Rare",
            "MedRare",
            "Medium",
            "MedWell",
            "Well",
            "Butterfly",
            "Pittsburg"
          ], 
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        ///////////////////////////////////////////////////APPETIZERS///////////////////////////////////////////////////////////////////
        {
          "category": "Appetizers",       //Nachos
          "name": "Nachos",
          "price": "8.95"
        },
        {
          "category": "Appetizers",       //Queso
          "name": "Queso",
          "price": "4.95"
        },
        {
          "category": "Appetizers",       //Chips&Salso
          "name": "Chips & Salsa",
          "price": "4.95"
        },
        {
          "category": "Appetizers",       //Wings
          "name": "Wings",
          "price": "7.95"
        },
        {
          "category": "Appetizers",       //SpinDip
          "name": "SpinDip",
          "price": "7.95"
        },
        {
          "category": "Appetizers",       //Quesadilla
          "name": "Quesadilla",
          "price": "7.95"
        },
        /////////////////////////////////////////////////////SALADS///////////////////////////////////////////////////////////////
        {
          "category": "Salads",           //Caesar
          "name": "Caesar",
          "price": "9.95"
        },
        {
          "category": "Salads",           //Ckn Caesar
          "name": "Ckn Caesar",
          "price": "11.95"
        },
        {
          "category": "Salads",           //Chef Salad
          "name": "Chef Salad",
          "price": "10.95"
        },
        {
          "category": "Salads",           //Oriental
          "name": "Oriental",
          "price": "10.95"
        },
        {
          "category": "Salads",           //Cobb
          "name": "Cobb",
          "price": "11.50"
        },
        {
          "category": "Salads",           //Wedge
          "name": "The Wedge",
          "price": "10.95"
        },
        /////////////////////////////////////////////////////////SOUPS//////////////////////////////////////////////////////////
        {
          "category": "Soups",            //French Onion
          "name": "French Onion",
          "price": "4.95"
        },
        {
          "category": "Soups",            //Vegetable
          "name": "Vegetable",
          "price": "4.95"
        },
        {
          "category": "Soups",            //Gumbo
          "name": "Gumbo",
          "price": "4.95"
        },
        {
          "category": "Soups",            //Broccoli Cheddar
          "name": "BrocCheddar",
          "price": "4.95"
        },
        ////////////////////////////////////////////////////////BASKETS//////////////////////////////////////////////////////////
        {
          "category": "Baskets",          //Rib Basket
          "name": "Ribs",
          "price": "9.95",
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        {
          "category": "Baskets",          //Ckn Tenders
          "name": "Ckn Tenders",
          "price": "9.95",
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        {
          "category": "Baskets",          //Sampler
          "name": "Sampler",
          "price": "10.95",
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        {
          "category": "Baskets",          //Burger
          "name": "Burger",
          "price": "9.95",
          "sides": [
            "Fries",
            "Green Beans",
            "Baked Potato",
            "Sweet Potato",
            "Asparagus",
            "Mashed Potatos",
            "Snap Peas"
          ]
        },
        /////////////////////////////////////////////////////////KIDS////////////////////////////////////////////////////
        {
          "category": "Kids",           //Corndog
          "name": "Corndog",
          "price": "4.95"
        },
        {
          "category": "Kids",           //Nuggets
          "name": "Ckn Nuggets",
          "price": "4.95"
        },
        {
          "category": "Kids",           //Mac and Cheese
          "name": "Mac & Chz",
          "price": "4.95"
        },
        {
          "category": "Kids",           //Chz Quesadilla
          "name": "Chz Quesadilla",
          "price": "4.95"
        },
        {
          "category": "Kids",           //Hotdog
          "name": "Hotdog",
          "price": "4.95"
        },
        {
          "category": "Kids",           //Kid Burger
          "name": "Kid Burger",
          "price": "4.95"
        },
        ///////////////////////////////////////////////////////LOWFAT////////////////////////////////////////////////////////
        {
          "category": "Low Fat",        //Veggie Pizza
          "name": "Veggie Pizza",
          "price": "12.95"
        },
        {
          "category": "Low Fat",
          "name": "Turkey Burger",      //Turkery Burger
          "price": "8.95"
        },
        {
          "category": "Low Fat",
          "name": "Lemonpepper Chicken",  //Lemonpepper Chicken
          "price": "13.95"
        },
        {
          "category": "Low Fat",          //Hummice
          "name": "Pita & Hummice",
          "price": "9.95"
        },
        /////////////////////////////////////////////////////SIDES////////////////////////////////////////////////////////////
        {
          "category": "SideItems",        //Fries
          "name": "Fries",
          "price": "3.95"
        },
        {
          "category": "SideItems",        //Green Beans
          "name": "Green Beans",
          "price": "3.95"
        },
        {
          "category": "SideItems",        //Baked Potato
          "name": "Baked Potato",
          "price": "3.95"
        },
        {
          "category": "SideItems",        //Sweet Potato
          "name": "Sweet Potato",
          "price": "3.95"
        },
        {
          "category": "SideItems",        //Asparagus
          "name": "Asparagus",
          "price": "3.95"
        },
        {
          "category": "SideItems",        //Mashed Potatos
          "name": "Mashed Potatos",
          "price": "3.95"
        },
        {
          "category": "SideItems",        //Snap Peas
          "name": "Snap Peas",
          "price": "3.95"
        },
        ///////////////////////////////////////////////DESSERTS////////////////////////////////////////////////////////
        {
          "category": "Dessert",
          "name": "Ultimate Brownie",     //Ultimate Brownie
          "price": "6.95"
        },
        {
          "category": "Dessert",          //Volcano
          "name": "Volcano",
          "price": "6.95"
        },
        {
          "category": "Dessert",          //Cheesecake
          "name": "Cheesecake",
          "price": "7.95"
        },
        {
          "category": "Dessert",          //Creme Brulee
          "name": "Creme Brulee",
          "price": "7.95"
        },
        ////////////////////////////////////////////////////BEVERAGES///////////////////////////////////////////////////
        {
          "category": "Beverages",        //Coke
          "name": "Coke",
          "price": "2.95"
        },
        {
          "category": "Beverages",        //Diet Coke
          "name": "Diet Coke",
          "price": "2.95"
        },
        {
          "category": "Beverages",        //Sprite
          "name": "Sprite",
          "price": "2.95"
        },
        {
          "category": "Beverages",        //Lemonade
          "name": "Lemonade",
          "price": "2.95"
        },
        {
          "category": "Beverages",        //Hi-C
          "name": "Hi-C",
          "price": "2.95"
        },
        {
          "category": "Beverages",        //Dr Pepper
          "name": "Dr. Pepper",
          "price": "2.95"
        },
        {
          "category": "Beverages",        //Water
          "name": "Water",
          "price": "0.00"
        },
        //////////////////////////////////////////////////////////BEER/////////////////////////////////////////////////////////
        {
          "category": "Beer",           //Budweiser
          "name": "Budweiser",
          "price": "3.95"
        },
        {
          "category": "Beer",           //Bud Light
          "name": "Bud Light",
          "price": "3.95"
        },
        {
          "category": "Beer",           //Coors Light
          "name": "Coors Light",
          "price": "3.95"
        },
        {
          "category": "Beer",
          "name": "Miller Lite",        //Miller Lite
          "price": "3.95"
        },
        {
          "category": "Beer",           //Corona
          "name": "Corona",
          "price": "3.95"
        },
        {
          "category": "Beer",
          "name": "Corona Light",       //Corona Light
          "price": "3.95"
        },
        {
          "category": "Beer",           //Samuel Adams
          "name": "Samuel Adams",
          "price": "4.95"
        },
        {
          "category": "Beer",
          "name": "Newcastle",          //Newcastle
          "price": "4.95"
        },
        /////////////////////////////////////////////////////////WINE///////////////////////////////////////////////////////
        {
          "category": "Wine",           //Chardonnay
          "name": "Chardonnay",
          "price": "5.95"
        },
        {
          "category": "Wine",           //Pinot Grigio
          "name": "Pinot Grigio",
          "price": "5.95"
        },
        {
          "category": "Wine",
          "name": "Riesling",           //Riesling
          "price": "5.95"
        },
        {
          "category": "Wine",
          "name": "Cabernet",           //Cabernet
          "price": "5.95"
        },
        {
          "category": "Wine",
          "name": "Pinot Noir",         //Pinot Noir
          "price": "5.95"
        },
        {
          "category": "Wine",           //Merlot
          "name": "Merlot",
          "price": "5.95"
        },
        {
          "category": "Wine",
          "name": "Shiraz",           //Shiraz
          "price": "5.95"
        },
        ///////////////////////////////////////////////////////LIQUOUR//////////////////////////////////////////////////////
        {
          "category": "Liquor",         //Vodka
          "name": "Vodka",
          "price": "4.95"
        },
        {
          "category": "Liquor",
          "name": "Gin",                //GIN
          "price": "4.95"
        },
        {
          "category": "Liquor",
          "name": "Tequila",            //Tequila
          "price": "4.95"
        },
        {
          "category": "Liquor",           //Bourbon
          "name": "Bourbon",
          "price": "4.95"
        },
        {
          "category": "Liquor",         //Scotch
          "name": "Scotch",
          "price": "4.95"
        },
        ////////////////////////////////////////////////////COCKTAILS////////////////////////////////////////////////////////////
        {
          "category": "Cocktails",
          "name": "Screwdriver",        //Screwdriver
          "price": "6.95"
        },
        {
          "category": "Cocktails",
          "name": "Margarita",          //Margarita
          "price": "6.95"
        },
        {
          "category": "Cocktails",
          "name": "Long Island Tea",    //Long Island Tea
          "price": "6.95"
        },
        {
          
        }

    ] 
