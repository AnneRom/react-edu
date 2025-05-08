export default function Product({ 
    name="Loading image", 
    imgURL="https://media.istockphoto.com/id/1408596126/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B8%D0%BD%D0%B4%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D1%81%D1%82%D0%B8%D0%BB%D0%B5-doodle-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BE%D1%82-%D1%80%D1%83%D0%BA%D0%B8-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB.jpg?s=612x612&w=0&k=20&c=UJf-CL3Uw91frxGAK9OnxG9Q8oxuvne9EUVZd602dZI=", 
    price=9999999999}) {
    // const price = 100;
    return (
    <div>
      <h2>{name}</h2>
      <img src={imgURL} width="300px" alt={name} />
      {/* <p className="text">Price: {price} credits</p> */}
      <p className="text">{price} Є</p>
    </div>
      );
  }
  
  function sum (a, b = 4) {
    console.log(a + b);
  }

  sum(2);
  sum(2, 5);