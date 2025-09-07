export default function ProductCart({item}) {
  return (
    <div
      className="w-[15rem] m-3 transition-all cursor-pointer rounded-lg overflow-hidden  group 
             transition-transform duration-300 ease-out 
             hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] hover:scale-105"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={item.imageSrc}
          alt={item.name}
        />
      </div>

      <div className="p-3 transform transition duration-300  group-hover:-translate-y-4">
        <div>
          <p className="font-bold text-gray-500">{item.name}</p>
          <p className="text-gray-800">Best Quality {item.name}</p>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <p className="font-semibold text-lg">₹{item.price}</p>
          <p className="line-through opacity-50">₹{item.oldPrice}</p>
          <p className="text-green-600 font-semibold"> {Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% off</p>
        </div>
      </div>
    </div>
  );
}
