import { useTheme } from "../context/theme-context";

const PrimaryColor = ({ className }) => {
    const { handleTheme } = useTheme();

    return (
        <button
            className={className}
            onClick={() => handleTheme(className)}
        ></button>
    );
};

export default PrimaryColor;
