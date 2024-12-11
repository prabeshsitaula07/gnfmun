import blogimg from '../../assets/homeImage.jpg';
import profile from '../../assets/profile.png';


const Blog: React.FC = () => (
    <>
        <div className="relative text-white mx-14 h-[477px]">
            <img src={blogimg} alt="blog" className="w-full h-full object-cover rounded-[20px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#141624] opacity-40 rounded-[20px]" />
            <div className="mx-10 absolute bottom-10">
                <h1 className="font-semibold text-4xl pb-4 leading-10 max-w-[754px]" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                    Empowering future leaders through Model United Nations, fostering diplomacy, critical thinking, and global awareness.
                </h1>
                <div className="flex h-9 w-72 gap-5 items-center pt-6">
                    <img src={profile} alt="profile" className="h-9 w-9 rounded-[28px]" />
                    <h4 className="font-medium text-base leading-6">Ritima Kumari</h4>
                    <h4 className="font-normal text-base leading-6">May 15, 2024</h4>
                </div>
            </div>
        </div>

        {/*  */}
        <section className="text-gray-600 body-font">
            <div className="container px-14 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {[
                        {
                            img: "https://dummyimage.com/720x400",
                            category: "CATEGORY 1",
                            title: "The Catalyzer",
                            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
                            views: "1.2K",
                            comments: "6",
                        },
                        {
                            img: "https://dummyimage.com/720x400",
                            category: "CATEGORY 2",
                            title: "The Innovator",
                            description: "Vexillologist yr glossier hella fam hella brooklyn snackwave direct trade microdosing.",
                            views: "890",
                            comments: "12",
                        },
                        {
                            img: "https://dummyimage.com/720x400",
                            category: "CATEGORY 3",
                            title: "The Visionary",
                            description: "Hammock tumeric post-ironic live-edge stumptown aesthetic lyft raw denim snackwave fam.",
                            views: "2.3K",
                            comments: "8",
                        },
                    ].map((card, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={card.img}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        {card.category}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        {card.title}
                                    </h1>
                                    <p className="leading-relaxed mb-3">{card.description}</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            {card.views}
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                            {card.comments}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    {[
                        {
                            category: "CATEGORY",
                            title: "Roof party normcore before they sold out, cornhole vape",
                            description: "Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland...",
                            author: { name: "Holden Caulfield", role: "UI DEVELOPER", img: "https://dummyimage.com/104x104" },
                            comments: "1.2K",
                            likes: "6"
                        },
                        {
                            category: "CATEGORY",
                            title: "Pinterest DIY dreamcatcher gentrify single-origin coffee",
                            description: "Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland...",
                            author: { name: "Alper Kamu", role: "DESIGNER", img: "https://dummyimage.com/103x103" },
                            comments: "1.2K",
                            likes: "6"
                        }
                    ].map((blog, index) => (
                        <div key={index} className="p-14 md:w-1/2 flex flex-col items-start">
                            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{blog.category}</span>
                            <h2 className="sm:text-3xl text-2xl font-medium text-gray-900 mt-4 mb-4">{blog.title}</h2>
                            <p className="leading-relaxed mb-8">{blog.description}</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>{blog.comments}
                                </span>
                                <span className="text-gray-400 inline-flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>{blog.likes}
                                </span>
                            </div>
                            <a className="inline-flex items-center">
                                <img alt="blog" src={blog.author.img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">{blog.author.name}</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">{blog.author.role}</span>
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>



    </>
);

export default Blog;
