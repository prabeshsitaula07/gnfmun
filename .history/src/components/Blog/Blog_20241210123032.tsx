const blogs = [
    {
        imgSrc: blogimg2,
        title: "Innovations in Job Search",
        author: "John Doe",
        date: "June 20, 2024",
        profileImg: profile1,
    },
    {
        imgSrc: blogimg3,
        title: "How AI is Shaping Recruitment",
        author: "Jane Smith",
        date: "July 10, 2024",
        profileImg: profile,
    },
    // Add more blog data...
];

const Blog: React.FC = () => (
    <>
        <div className="relative text-white mx-14 h-[477px]">
            <img src={blogimg} alt="blog" className="w-full h-full object-cover rounded-[20px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#141624] opacity-40 rounded-[20px]" />
            <div className="mx-10 absolute bottom-10">
                <h1 className="font-semibold text-4xl pb-4 leading-10 max-w-[754px]">Revolutionizing Job Searches: Introducing Our Innovative Job Portal App</h1>
                <div className="flex h-9 w-72 gap-5 items-center pt-6">
                    <img src={profile} alt="profile" className="h-9 w-9 rounded-[28px]" />
                    <h4 className="font-medium text-base leading-6">Ritima Kumari</h4>
                    <h4 className="font-normal text-base leading-6">May 15, 2024</h4>
                </div>
            </div>
        </div>

        {/* Blog Cards */}
        <section className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {blogs.map((blog, index) => (
                    <div className="p-4 md:w-1/3" key={index}>
                        <BlogCard
                            imgSrc={blog.imgSrc}
                            title={blog.title}
                            author={blog.author}
                            date={blog.date}
                            profileImg={blog.profileImg}
                        />
                    </div>
                ))}
            </div>
        </section>
    </>
);
