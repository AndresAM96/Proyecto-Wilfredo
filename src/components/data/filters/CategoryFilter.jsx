
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;