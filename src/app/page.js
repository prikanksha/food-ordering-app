import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders mainHeader={'About us'} subHeader={'Our story'} />
        <div className="text-gray-500 max-w-xl mx-auto mt-4 flex flex-col gap-4">
          <p>Welcome to FoodModo—where culinary tradition meets modern dining. Founded by a diverse group of culinary enthusiasts, FoodModo is a celebration of global flavors and local freshness. From our humble beginnings at a culinary school to the bustling restaurant we are today, each dish we serve is infused with a story of passion and craftsmanship.</p>
          <p>Our menu showcases a fusion of traditional recipes and modern twists, emphasizing high-quality, locally sourced ingredients. Signature dishes like our Wood-Fired Margherita Pizza and Spicy Thai Green Curry exemplify our commitment to culinary excellence. The vibrant atmosphere and open kitchen layout allow guests to witness the artistry behind their meals, enhancing the dining experience.</p>
          <p>FoodModo is more than just a place to eat; it's a destination where food lovers gather to create memories. Join us for a meal, and be part of our ongoing journey to explore the rich possibilities of flavor.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders mainHeader={'Contact us'} subHeader={'Don\'t hesitate'}/>
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+16232857427">
            +1 (623)285-7427
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
