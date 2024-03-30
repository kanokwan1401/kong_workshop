const Food = ({foodName, image_url}) => {
  return (
    <div className="single-food">
      <h3>{foodName}</h3>
      <img src={image_url} alt={foodName} />
    </div>
  );
};

export default Food;
