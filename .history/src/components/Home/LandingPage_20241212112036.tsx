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
                <button class="relative inline-block font-medium group py-1.5 px-2.5 ">
<span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
<span class="relative text-indigo-600 ">Button Hover</span>
</button>
            </div>
        </div>
    );
};

export default LandingPage;
