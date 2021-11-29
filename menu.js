const menu = [
    {
        id: 1,
        title: "Toast Sunny Egg",
        category: "breakfast",
        price: 10,
        img: "images/breakfast/bread-with-sunny-side-up-egg.jpg",
        desc: "Made on whole grain toast with mashed avocado, a runny egg and a few dashes of hot sauce – 5 ingredients, 5 minutes to make, it doesn’t get better than that!"
    },
    {
        id: 2,
        title: "Blueberry Toast",
        category: "breakfast",
        price: 15,
        img: "images/breakfast/toast-bread-with-blueberry.jpg",
        desc: "Great cereal with a great taste. Being able to purchase in multiples and send to a Grandson in the Air Force is the most important thing as this is his favorite cereal."
    },
    {
        id: 3,
        title: "Toast Fried Egg",
        category: "breakfast",
        price: 12,
        img: "images/breakfast/toasted-bread-with-fried-egg.jpg",
        desc: "Yum, definitely. I love wilted spinach with eggs. My fave too, Emily! Try it with a layer of freshly wilted spinach between the mayo and the egg -- yum!"
    },
    {
        id: 4,
        title: "Salad With Lemon",
        category: "lunch",
        price: 19,
        img: "images/lunch/bowls-of-salad-with-lemon.jpg",
        desc: "I made this for a quick appetizer! My guests loved it! I will definitely make this again! Give this recipe a try! It will not disappoint!!"
    },
    {
        id: 5,
        title: "Fruits Salad",
        category: "lunch",
        price: 20,
        img: "images/lunch/fruits-salads.jpg",
        desc: "Great fruit salad! The sauce was enough to dress up the salad without adding a ton of extra calories. I took this to a party and everyone thought it was very good."
    },
    {
        id: 6,
        title: "Vegetables Burger",
        category: "lunch",
        price: 11,
        img: "images/lunch/burger-bun-with-vegetables.jpg",
        desc: "Our Gourmet Vegan burgers are certified gluten free and 100% organic. They are based on Quinoa and vegetables and were nominated in May by the Vegetarian Times for Best Veggie Burger."
    },
    {
        id: 7,
        title: "Chocolate Cookie Frappe",
        category: "shakes",
        price: 7,
        img: "images/shakes/Chocolate-Cookies-Frappe.jpg",
        desc: "I wanted to love it, but it was like the cookie monster had been constipated and found some exlax and used my cup as a toilet because the bathroom in my Starbucks was so filthy."
    },
    {
        id: 8,
        title: "Double Dutch Ice-cream",
        category: "shakes",
        price: 9,
        img: "images/shakes/Double-Dutch-Ice-Cream.jpg",
        desc: "A creamy and mouth-watering homemade ice cream idea from Alaska Crema-Asada, this is a perfect ice cream base to use. With this 2-in-1 Alaska Crema-Asada you can make different ice cream flavors of your choice."
    },
    {
        id: 9,
        title: "Red Respberries",
        category: "shakes",
        price: 13,
        img: "images/shakes/Red-Respberries.jpg",
        desc: "Red raspberries are a common and important fruit in the Western diet due to their content of essential nutrients and beneficial phytochemicals."
    },
]

const menuItems = document.querySelector(".container");

const allBtns = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    
});

function displayMenuItems(Items){
    let displayMenu = Items.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} class="image" alt=${item.title} />
        <div class="menu-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <div class="menu-text">${item.desc}</div>
        </div>
    </article>`;
    });

    displayMenu = displayMenu.join("");

    menuItems.innerHTML = displayMenu;
}

allBtns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.name;
console.log(category);
        const menuCategory = menu.filter(function(categoryItem) {
            if(categoryItem.category === category){
                return categoryItem;
            }
        });

        if(category === "all"){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory);
        }
    })
})