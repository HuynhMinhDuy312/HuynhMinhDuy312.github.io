const CategoryButton = ({ category, className, handleChangeCategory }) => {
    return (
        <button
            className={className}
            onClick={() => handleChangeCategory(category)}
        >
            {category}
        </button>
    );
};

export default CategoryButton;
