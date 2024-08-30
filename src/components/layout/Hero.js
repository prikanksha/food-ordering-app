import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-3xl font-semibold">
          Dine Different, <br /> Taste Excellence.
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          FoodModo Restaurant elevates your dining experience by blending traditional
          flavors with modern culinary techniques. Our carefully crafted menu features
          locally sourced ingredients and international dishes designed to delight
          every palate. <br />
          Join us for a dining adventure where every dish tells a story.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image src={'/logo2.jpg'} layout={'fill'} objectFit={'contain'} alt={'logo'}/>
      </div>
    </section>
  );
}