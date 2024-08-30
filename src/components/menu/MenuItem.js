export default function MenuItem({ title, description, imgSrc, price }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <img src={imgSrc} alt={title}/>
      <h4 className="font-semibold text-xl my-3 h-12">{title}</h4>
      <p className="text-gray-500 text-sm h-20">
        {description}
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">
        Add to cart ${price}
      </button>
    </div>
  );
}