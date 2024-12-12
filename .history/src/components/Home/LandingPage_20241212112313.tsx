import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';


const LandingPage = () => {
    const backgroundImages = [
        image1, // Replace with your image paths
        image2,
        image3,
    ];

    const foregroundContent = [
        "Together, We Can Make a Difference!",
        "Empowering Communities, Changing Lives!",
        "Join Hands to Help Those in Need!",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); // Change background every 5 seconds

        return () => {
            clearInterval(imageInterval);
        };
    }, []);

    return (
        <div
            className="relative h-screen w-full text-white"
            style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out",
            }}
        >
            {/* Add a dark overlay */}
            <div
                className="absolute inset-0 bg-black opacity-30"
                style={{
                    mixBlendMode: "multiply", // Optional: Enhances the overlay's interaction with the image
                }}
            >

            </div>

            <div className="absolute bottom-20 px-12 rounded-lg">
                <h1 className="md:text-6xl font-bold">
                    <Typewriter
                        options={{
                            strings: foregroundContent,
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </h1>
                <p className="mt-4 text-lg md:text-xl">Your journey starts here.</p>
                <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-2 px-2 my-4">
                    <span className="w-56 h-48 rounded bg-primary absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white text-lg ring-1 ring">Get Started</span>
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
