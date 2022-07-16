const Category = ({ title }) => {
  return (
    <a
      href={"/"}
      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 hover:bg-white"
    >
      {title}
    </a>
  );
};

export default Category;
