import { useEffect, useRef, useState } from "react";
import Theme from "./theme/Theme";
import { useTheme } from "./context/theme-context";
import {
    About,
    Contact,
    FloatingNav,
    Footer,
    Header,
    Navbar,
    Portfolio,
    Services,
} from "./sections";

const App = () => {
    const mainRef = useRef();
    const { themeState } = useTheme();
    const [showFloatingNav, setShowFloatingNav] = useState(true);
    const [siteYPosition, setSiteYPosition] = useState(0);

    const handleShowFloatingNav = () => {
        setShowFloatingNav(true);
    };

    const handleHideFloatingNav = () => {
        setShowFloatingNav(false);
    };

    //check if floating nav should be shown or hidden
    const handleToggleFloatingNav = () => {
        //check if we scrolled up or down at least 20px
        if (
            siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
            siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
        ) {
            handleShowFloatingNav();
        } else {
            handleHideFloatingNav();
        }
        setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    };

    useEffect(() => {
        const checkYPosition = setInterval(handleToggleFloatingNav, 2000);
        return () => clearInterval(checkYPosition);
    }, [siteYPosition]);

    return (
        <main
            className={`${themeState.primary} ${themeState.background}`}
            ref={mainRef}
        >
            <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
            <Theme />
            {showFloatingNav && <FloatingNav />}
        </main>
    );
};

export default App;
