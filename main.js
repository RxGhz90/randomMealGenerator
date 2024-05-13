// Catalog of Meal
const catalogMeal = {
    breakfastChoice : [
        'Greek yogurt with mixed berries and granola',
        'Oatmeal topped with sliced bananas and almond butter',
        'Scrambled eggs with spinach and whole grain toast',
        'Smoothie bowl topped with sliced kiwi, almonds, and chia seeds',
        'Avocado toast with poached eggs and a sprinkle of chili flakes',
        'Cottage cheese with sliced peaches and a drizzle of honey',
        'Whole grain pancakes topped with fresh berries and maple syrup'
    ],

    lunchChoice : [
        'Grilled chicken salad with mixed greens, cherry tomatoes, cucumbers, and vinaigrette dressing',
        'Quinoa and black bean stuffed peppers',
        'Lentil soup with a side of whole grain bread',
        'Chickpea salad wrap with hummus and veggies',
        'Spinach and feta quiche with a side of mixed greens',
        'Caprese salad with fresh mozzarella, tomatoes, basil, and balsamic glaze',
        'Thai-inspired peanut tofu bowl with rice noodles and vegetables'
    ],

    dinnerChoice : [
        'Baked salmon with roasted vegetables (such as broccoli, carrots, and bell peppers) and quinoa',
        'Stir-fried tofu with snow peas and brown rice',
        'Turkey meatballs in marinara sauce served over whole wheat spaghetti with a side salad',
        'Grilled shrimp skewers with quinoa pilaf and steamed asparagus',
        'Beef and vegetable stir-fry with noodles',
        'Baked chicken breast with roasted sweet potatoes and green beans',
        'Veggie chili served with a side of cornbread'
    ]
}

// Generate Meal Plan
const generateMealPlan = () => {
    const sevenDays = 7; 
    const randNumber = Math.floor(Math.random() * (sevenDays + 1));
    let mealPlan = [];

    for (const meal in catalogMeal) {
        switch (meal) {
            case 'breakfastChoice':
                mealPlan.push(`Breakfast: ${catalogMeal[meal][randNumber]}`); break;
            case 'lunchChoice':
                mealPlan.push(`Lunch: ${catalogMeal[meal][randNumber]}`); break;
            case 'dinnerChoice':
                mealPlan.push(`Dinner: ${catalogMeal[meal][randNumber]}`); break;
            default:
                generateMealPlan(); break;
        }
    } return mealPlan;
}

const printMealPlanForToday = () => {
    const selectedMeal = generateMealPlan();
    const printMealPlan = selectedMeal.join('\n');
    
    return `Here's your random meal plan for today! \n${printMealPlan} \n\nEnjoy your meal today.`;
} 

console.log(printMealPlanForToday());