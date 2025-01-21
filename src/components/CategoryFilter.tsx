const CategoryFilter = ({
  category,
  onCategoryChange,
}: {
  category: string;
  onCategoryChange: (value: string) => void;
}) => {
  const categories = ['신규', '헬스케어', '물류', '여행'];

  return (
    <select
      value={category}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="border p-2 rounded-lg w-full sm:w-32"
    >
      <option value="">전체</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
