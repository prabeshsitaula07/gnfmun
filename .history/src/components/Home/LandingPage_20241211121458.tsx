import { useState, useEffect } from "react";
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

const LandingPage = () => {
    const backgroundImages = [
       image1,
       image2
    ];

    const foregroundContent = [
        "Together, We Can Make a Difference!",
        "Empowering Communities, Changing Lives!",
        "Join Hands to Help Those in Need!",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); // Change background every 5 seconds

        const contentInterval = setInterval(() => {
            setCurrentContentIndex((prevIndex) => (prevIndex + 1) % foregroundContent.length);
        }, 3000); // Change content every 3 seconds

        return () => {
            clearInterval(imageInterval);
            clearInterval(contentInterval);
        };
    }, []);

    return (
        <div
            className="h-screen w-full flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out",
            }}
        >
            <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold">
                    {foregroundContent[currentContentIndex]}
                </h1>
                <p className="mt-4 text-lg md:text-xl">Your journey starts here.</p>
                <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
