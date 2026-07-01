export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  popular?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "Breakfast",
    items: [
      { name: "Avocado Toast", description: "Toasted sourdough with labneh, lime, avocado and feta.", price: "AED 40" },
      { name: "Acai Bowl", description: "Acai puree with berries, house-made granola and almond butter.", price: "AED 43" },
      { name: "Full Breakfast Platter", description: "Scrambled eggs, beef bacon, mushrooms, spinach, tomatoes, avocado, sourdough.", price: "AED 71" },
      { name: "Avocado Maple Chili Toast", description: "Sourdough with honey, olive oil, mashed avocado and chili flakes.", price: "AED 40" },
      { name: "Egg Florentine on Baked Nest", description: "Hashbrowns, sautéed spinach, smoked salmon, poached eggs, hollandaise.", price: "AED 63" },
      { name: "Egg on Toast", description: "Seasoned omelette, scrambled or sunny side up with side salad.", price: "AED 34" },
      { name: "Egg Nest", description: "Hashbrowns with avocado, labneh, soft scrambled eggs, parmesan.", price: "AED 50" },
      { name: "Overnight Oats", description: "Soaked in dates and cinnamon with granola, greek yogurt, almond butter.", price: "AED 40" },
      { name: "Warm Nutella French Toast", description: "Brioche stuffed with nutella, maple syrup, sliced strawberries.", price: "AED 50" },
      { name: "Almond Butter & Jam Brioche", description: "Thick-cut brioche with almond butter and house-made jam.", price: "AED 36" },
      { name: "Soft Scrambled Egg on Bun", description: "Brioche bun, mustard mayo, sriracha, caramelized onions, eggs, cheddar.", price: "AED 32" },
      { name: "Turkish Eggs", description: "Poached eggs in labneh and tahini, chili oil, charred sourdough.", price: "AED 47" },
      { name: "Cinnamon Brulee Toast", description: "Brioche with sugar crust and greek yogurt.", price: "AED 42" },
      { name: "Egg Benedict on Brioche", description: "Brioche, beef bacon, spinach, poached egg, hollandaise.", price: "AED 58" },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Spinach Caesar Salad", description: "With sourdough croutons and crispy bacon.", price: "AED 61" },
      { name: "Jalapeño Poppers", description: "Crispy breadcrumb coating, beef bacon and cheese.", price: "AED 44" },
      { name: "Grilled Corn & Avocado Salad", description: "Corn, rocket, cherry tomatoes, coriander, avocado, onions, feta.", price: "AED 58" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Rigatoni Sorrentina", description: "Arrabiata, cream, fresh basil, cheese and chili flakes.", price: "AED 56", popular: true },
      { name: "Ranch Crispy Chicken", description: "Marinated in ranch with cabbage, avocado and sticky rice.", price: "AED 66" },
      { name: "Cajun Shrimp", description: "Black pepper, herbs, avocado, feta, corn and brown rice.", price: "AED 61" },
      { name: "Pesto Fusilli", description: "Spinach pesto with basil, pine nuts and burrata.", price: "AED 78" },
      { name: "Grilled Salmon", description: "Coconut rice with mango and pomegranate salsa.", price: "AED 76" },
      { name: "Golden Harissa Chicken", description: "Harissa-mayo grilled chicken on couscous and chickpeas.", price: "AED 66" },
      { name: "Thai Curry",  description: "Thai curry with coconut rice and red capsicum.",  price: "Chicken AED 56 · Shrimp AED 58",
},
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Crispy Chicken Caesar", description: "Sourdough, caesar, romaine, avocado, crispy chicken, parmesan.", price: "AED 57" },
      { name: "Grilled Cheese & Parmesan", description: "Truffle honey with cheddar, mozzarella, provolone, parmesan.", price: "AED 59", popular: true },
      { name: "Bacon & Jalapeño", description: "Honey mustard mayo, pickled jalapeño, cheddar, beef bacon.", price: "AED 66" },
      { name: "Classic Spicy Tuna", description: "Sweet paprika, jalapeño, mayo, fresh tomatoes.", price: "AED 37" },
      { name: "Crispy Chicken on Brioche", description: "Fried chicken thigh, red cabbage slaw, pickled cucumber, mayo, honey.", price: "AED 47" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Sweet Potato Fries", price: "AED 25" },
      { name: "French Fries", price: "AED 17" },
      { name: "Truffle Fries", price: "AED 34" },
      { name: "Mixed Salad", price: "AED 17" },
    ],
  },
  {
    title: "Kids",
    items: [
      { name: "Kids Overnight Oats", price: "AED 22" },
      { name: "Kids Soft Scrambled Eggs", price: "AED 22" },
      { name: "Kids Cinnamon Toast", price: "AED 24" },
      { name: "Creamy Spaghetti", price: "AED 25" },
      { name: "Kids Grilled Salmon & Fries", price: "AED 58" },
    ],
  },
  {
    title: "Coffee",
    items: [
      { name: "Iced Americano", price: "AED 23" },
      { name: "Iced V60 (Premium)", price: "AED 48" },
      { name: "Iced V60 Classic — Kenya", price: "AED 38" },
      { name: "Iced V60 Classic — Ethiopia", price: "AED 35" },
      { name: "Iced Honeycomb Latte", price: "AED 33", popular: true },
      { name: "Iced Latte", price: "AED 25" },
      { name: "Iced Rose Coffee Latte", price: "AED 32" },
      { name: "Iced Spanish Latte", price: "AED 32" },
    ],
  },
  {
    title: "Smoothies",
    items: [
      { name: "Acai Berry Smoothie", price: "AED 34" },
      { name: "Green Machine", price: "AED 29" },
      { name: "Beet the Heat", price: "AED 29" },
      { name: "Pink Dragon", price: "AED 29", popular: true },
      { name: "Mango Paradise", price: "AED 29" },
      { name: "Tropicolada", price: "AED 29" },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Iced Matcha Latte", price: "AED 37" },
      { name: "Cloudy Coconut Matcha", price: "AED 39" },
      { name: "Iced Peach Tea", price: "AED 29" },
      { name: "Orange Juice", price: "AED 24" },
      { name: "Iced Cascara", price: "AED 34" },
      { name: "Iced Hibiscus Rose Tea", price: "AED 29" },
      { name: "Lemon with Mint", price: "AED 29" },
      { name: "Passion Fruit Mojito", price: "AED 32" },
      { name: "Rose Lemonade", price: "AED 29" },
      { name: "Lavender Lemonade", price: "AED 29" },
    ],
  },
  {
    title: "Water & Soda",
    items: [
      { name: "Coke", price: "AED 14" },
      { name: "Coke Diet", price: "AED 14" },
      { name: "Sprite", price: "AED 14" },
      { name: "Ginger Ale", price: "AED 14" },
      { name: "Aqua Panna 330ml", price: "AED 15" },
      { name: "Aqua Panna 500ml", price: "AED 18" },
      { name: "Sparkling Water — Small", price: "AED 14" },
      { name: "Sparkling Water — Large", price: "AED 19" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "San Sebastian Cheesecake", price: "AED 37", popular: true },
      { name: "Sticky Date Pudding", price: "AED 30" },
      { name: "Crème Brulée Cinnamon Roll", price: "AED 23" },
      { name: "Classic Chocolate Brownie", price: "AED 25" },
      { name: "Aseeda", price: "AED 40" },
      { name: "Mixed Berry Cheesecake", price: "AED 40" },
    ],
  },
];
export const hours = [
  { day: "Monday", time: "7AM – 11PM" },
  { day: "Tuesday", time: "7AM – 11PM" },
  { day: "Wednesday", time: "7AM – 11PM" },
  { day: "Thursday", time: "7AM – 11PM" },
  { day: "Friday", time: "7AM – 11:30PM" },
  { day: "Saturday", time: "7AM – 11:30PM" },
  { day: "Sunday", time: "7AM – 11PM" },
];
