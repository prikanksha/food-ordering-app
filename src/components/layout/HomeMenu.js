import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute h-full left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/salad1.png'} width={150} height={250} alt={'salad'}/>
        </div>
        <div className="absolute -top-[100px] -right-0 -z-10">
          <Image src={'/salad2.png'} width={150} height={200} alt={'salad'}/>
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders mainHeader="MENU" subHeader="Check out" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem
          title="Roasted Beetroot Salad"
          description="A delightful mix of roasted beetroot, goat cheese, and walnuts, drizzled with balsamic glaze."
          imgSrc="/beetroot_salad.png"
          price="12"
        />
        <MenuItem
          title="Truffle Mushroom Risotto"
          description="Creamy risotto cooked with aromatic truffles and wild mushrooms."
          imgSrc="/truffle_mushroom_risotto.png"
          price="18"
        />
        <MenuItem
          title="Grilled Salmon with Asparagus"
          description="Perfectly grilled salmon fillet served with tender asparagus and a rich lemon butter sauce."
          imgSrc="/grilled_salmon_asparagus.png"
          price="22"
        />
        <MenuItem
          title="Spicy Thai Green Curry"
          description="Authentic green curry with chicken, bamboo shoots, bell peppers, and Thai basil, served with jasmine rice."
          imgSrc="/thai_green_curry.png"
          price="15"
        />
        <MenuItem
          title="Chocolate Lava Cake"
          description="Decadent molten chocolate cake with a flowing center, served with a scoop of vanilla ice cream."
          imgSrc="/chocolate_lava_cake.png"
          price="9"
        />
        <MenuItem
          title="Wood-Fired Margherita Pizza"
          description="Classic Margherita with fresh basil, ripe tomatoes, and mozzarella, charred in a wood-fired oven."
          imgSrc="/wood_fired_margherita_pizza.png"
          price="14"
        />
      </div>
    </section>
  );
}