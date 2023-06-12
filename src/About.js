import React from 'react';
import Nav from './NavBar';
import Footer from './footer';

const About = () => {
  return (
    <div>
        <Nav />
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-4">Welcome to our smoothie bar, where we blend fresh and healthy ingredients to create delicious and nutritious smoothies.</p>
      <p className="mb-4">At our smoothie bar, we believe that quality begins with the ingredients. That's why we prioritize sourcing fresh, locally-grown fruits and vegetables to create our smoothies. By using ingredients at their peak ripeness, we ensure that each sip bursts with flavor and provides optimal nutritional value. From vibrant berries to leafy greens and exotic tropical fruits, we carefully select the finest produce to deliver a sensory delight with every blend.</p>
      <p className='mb-4'>Boosting the nutritional content of our smoothies, we incorporate a variety of superfoods known for their exceptional health benefits. Ingredients like chia seeds, flaxseeds, hemp hearts, spirulina, and maca powder add a powerful punch of vitamins, minerals, and antioxidants. These superfoods contribute to supporting immune function, improving digestion, enhancing energy levels, and promoting overall well-being. Indulge in our superfood-infused creations and experience a boost of vitality in every sip.</p>
      <p className='mb-4'>We understand that individual preferences and dietary needs vary, which is why we offer customizable options for our smoothies. Whether you're following a specific diet, have allergies, or simply prefer certain flavors, our skilled baristas are here to cater to your unique tastes. You can choose from an array of base options, including almond milk, coconut water, or Greek yogurt, and add your favorite fruits, vegetables, and supplements to create a personalized blend that perfectly suits your cravings and dietary goals.</p>
      <p className='mb-4'>Craving a sweet treat but want to stay mindful of your health goals? Our smoothies offer guilt-free indulgence. We believe that healthy living shouldn't mean sacrificing taste. With the perfect blend of natural sweetness and satisfying textures, our smoothies fulfill your cravings without compromising on nutrition. Treat yourself to our delightful dessert-inspired smoothies, which incorporate wholesome ingredients like cacao, almond butter, and coconut milk for a guilt-free indulgence you can savor.</p>
      <p className="mb-4">Whether you're looking for a refreshing post-workout boost, a morning pick-me-up, or a tasty treat that's packed with vitamins, we've got you covered. Our skilled baristas are passionate about crafting the perfect smoothie to satisfy your cravings and fuel your body.</p>
      <p className="mb-4">Visit us today and indulge in our wide range of flavors and combinations. We also offer custom smoothie options, allowing you to personalize your drink with your favorite ingredients.</p>
      <p className="mb-4">Experience the goodness of our smoothies and join us on the journey to a healthier lifestyle!</p>
    </div>
        <Footer />
    </div>
    
  );
};

export default About;
