import blogimg from '../../assets/image.png';
import profile from '../../assets/profile.png';
import blogimg2 from '../../assets/blogimg2.png';
import blogimg3 from '../../assets/blogimg3.png';
import blogimg4 from '../../assets/blogimg4.png';
import blogimg5 from '../../assets/blogimg5.png';
import profile1 from '../../assets/profile1.png';

interface BlogCardProps {
    imgSrc: string;
    title: string;
    author: string;
    date: string;
    profileImg: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, title, author, date, profileImg }) => (
    <div className="gap-4 h-fit w-[25rem] flex flex-col mb-[3.75rem]">
        <img src={imgSrc} alt="blog" className="border border-[#D9D9D9] w-full h-60 rounded-xl" />
        <h2 className="font-medium text-2xl leading-10">{title}</h2>
        <div className="flex h-9 w-72 gap-5 items-center">
            <img src={profileImg} alt="profile" className="h-9 w-9 rounded-[28px]" />
            <h4 className="font-medium text-base leading-6">{author}</h4>
            <h4 className="font-normal text-base leading-6">{date}</h4>
        </div>
    </div>
);

const Blog: React.FC = () => (
    <>
        <h1 className="text-3xl font-medium p-14">Explore Our Blogs</h1>
        <div className="relative text-white mx-14 h-[477px]">
            <img src={blogimg} alt="blog" className="w-full h-full object-cover rounded-[20px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#141624] opacity-40 rounded-[20px]" />
            <div className="mx-10 absolute bottom-10">
                <h1 className="font-semibold text-4xl pb-4 leading-10 max-w-[754px]" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                    Revolutionizing Job Searches: Introducing Our Innovative Job Portal App
                </h1>
                <div className="flex h-9 w-72 gap-5 items-center pt-6">
                    <img src={profile} alt="profile" className="h-9 w-9 rounded-[28px]" />
                    <h4 className="font-medium text-base leading-6">Ritima Kumari</h4>
                    <h4 className="font-normal text-base leading-6">May 15, 2024</h4>
                </div>
            </div>
        </div>

        <div className="mx-14 my-[3.75rem] flex justify-between">
            <div className='gap-6 h-[25rem] w-[40.5rem] flex flex-col '>
                <img src={blogimg2} alt="blog image 2" className='border border-[#D9D9D9] w-full h-full rounded-xl' />
                <h2 className='font-medium text-4xl leading-10 '>
                    Find Your Dream Job: How Our App Simplifies the Job Hunt
                </h2>
                <div className='flex h-9 w-72 gap-5 items-center pt-6'>
                    <img src={profile1} alt="profile image" className='h-9 w-9 rounded-[28px]' />
                    <h4 className='font-medium text-base leading-6' style={{ fontFamily: 'Work Sans, sans-serif' }}>Ritima Kumari</h4>
                    <h4 className='font-normal text-base leading-6' style={{ fontFamily: 'Work Sans, sans-serif' }}>May 15, 2024</h4>
                </div>
            </div>
            <div className="flex flex-col justify-between h-fit gap-[2.5rem] w-[39.75rem]">
                {[blogimg3, blogimg4, blogimg5].map((img, i) => (
                    <div key={i} className="flex gap-[0.9375rem]">
                        <img src={img} alt={`blog image ${i + 3}`} className="w-[18.75rem] h-[10.125rem] rounded-[10px]" />
                        <div>
                            <h3 className="font-semibold text-[18px] leading-6 mb-[1.25rem]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                The Future of Job Searching: Why Our Job Portal Stands Out
                            </h3>
                            <h4 className="font-normal" style={{ fontFamily: 'Open Sans, sans-serif' }}>By Ritima Kumari * Mar 28, 2020</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="h-fit w-full grid grid-cols-3 px-14 m-auto">
            {[{ img: blogimg2, title: "Job Hunting Made Easy: Discover the Benefits of Our Job Portal", author: "Ritima Kumari", date: "May 15, 2024" },
            { img: blogimg5, title: "Your Next Job Awaits: Explore the Features of Our Job Portal App", author: "Hari Bahadur", date: "March 15, 2024" },
            { img: blogimg3, title: "Empowering Job Seekers: The Essential Guide to Our Job Portal ", author: "Ram Hari", date: "May 3, 2024" },
            { img: blogimg5, title: "Your Next Job Awaits: Explore the Features of Our Job Portal App", author: "Prabin Thapa", date: "April 20, 2023" },
            { img: blogimg3, title: "Empowering Job Seekers: The Essential Guide to Our Job Portal ", author: "Prabin Thapa", date: "April 20, 2023" },
            { img: blogimg4, title: "Empowering Job Seekers: The Essential Guide to Our Job Portal ", author: "Ram Hari", date: "May 3, 2024" },
            { img: blogimg3, title: "Empowering Job Seekers: The Essential Guide to Our Job Portal ", author: "Ram Hari", date: "May 3, 2024" },
            { img: blogimg, title: "Job Hunting Made Easy: Discover the Benefits of Our Job Portal", author: "Prabin Thapa", date: "April 20, 2023" },
            { img: blogimg3, title: "Empowering Job Seekers: The Essential Guide to Our Job Portal ", author: "Prabin Thapa", date: "April 20, 2023" },
            ]
                .map((blog, i) => (
                    <BlogCard key={i} imgSrc={blog.img} title={blog.title} author={blog.author} date={blog.date} profileImg={blogimg3} />
                ))}
        </div>

        <h1 className="text-3xl font-medium px-14 pb-14">Featured Categories</h1>
        <div className='flex px-14 justify-between items-center mb-14'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#206C89"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" className='bg-[#F5F7F9] rounded-full px-5 py-4'/></svg>
            
            <div className='flex gap-8 w-[68.125rem]'>
            <div className='w-[23rem] flex gap-[15px] h-[4.875rem] p-[0.625rem] items-center border border-[#F5F5F5] shadow-[0px_4px_4px_0px_#00000040]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#206C89" className='bg-[#F5F7F9] rounded-full px-5 py-4'><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    <div>
                        <h3>Ritima Kumari</h3>
                        <p>Job HUnting Made Easy: Discover the Benefits of Our Job Portal</p>
                    </div>
                </div>
            <div className='w-[23rem] flex gap-[15px] h-[4.875rem] p-[0.625rem] items-center border border-[#F5F5F5] shadow-[0px_4px_4px_0px_#00000040]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#206C89" className='bg-[#F5F7F9] rounded-full px-5 py-4'><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    <div>
                        <h3>Ritima Kumari</h3>
                        <p>Job HUnting Made Easy: Discover the Benefits of Our Job Portal</p>
                    </div>
                </div>
            <div className='w-[23rem] flex gap-[15px] h-[4.875rem] p-[0.625rem] items-center border border-[#F5F5F5] shadow-[0px_4px_4px_0px_#00000040]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#206C89" className='bg-[#F5F7F9] rounded-full px-5 py-4'><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    <div>
                        <h3>Ritima Kumari</h3>
                        <p>Job HUnting Made Easy: Discover the Benefits of Our Job Portal</p>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#206C89"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" className='bg-[#F5F7F9] rounded-full px-5 py-4'/></svg>
        </div>

        <div className="mx-14 my-[3.75rem] flex justify-between">
            <div className='gap-6 h-[25rem] w-[40.5rem] flex flex-col '>
                <img src={blogimg2} alt="blog image 2" className='border border-[#D9D9D9] w-full h-full rounded-xl' />
                <h2 className='font-medium text-4xl leading-10 '>
                    Find Your Dream Job: How Our App Simplifies the Job Hunt
                </h2>
                <div className='flex h-9 w-72 gap-5 items-center pt-6'>
                    <img src={profile1} alt="profile image" className='h-9 w-9 rounded-[28px]' />
                    <h4 className='font-medium text-base leading-6' style={{ fontFamily: 'Work Sans, sans-serif' }}>Ritima Kumari</h4>
                    <h4 className='font-normal text-base leading-6' style={{ fontFamily: 'Work Sans, sans-serif' }}>May 15, 2024</h4>
                </div>
            </div>
            <div className="flex flex-col justify-between h-fit gap-[2.5rem] w-[39.75rem]">
                {[blogimg3, blogimg4, blogimg5].map((img, i) => (
                    <div key={i} className="flex gap-[0.9375rem]">
                        <img src={img} alt={`blog image ${i + 3}`} className="w-[18.75rem] h-[10.125rem] rounded-[10px]" />
                        <div>
                            <h3 className="font-semibold text-[18px] leading-6 mb-[1.25rem]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                The Future of Job Searching: Why Our Job Portal Stands Out
                            </h3>
                            <h4 className="font-normal" style={{ fontFamily: 'Open Sans, sans-serif' }}>By Ritima Kumari * Mar 28, 2020</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="h-fit w-full grid grid-cols-3 px-14">
            {[{ img: blogimg2, title: "Job Hunting Made Easy: Discover the Benefits of Our Job Portal", author: "Ritima Kumari", date: "May 15, 2024" },
            { img: blogimg5, title: "Your Next Job Awaits: Explore the Features of Our Job Portal App", author: "Hari Bahadur", date: "March 15, 2024" },
            { img: blogimg3, title: "Empowering Job Seekers: The Essential Guide to Our Job Portal ", author: "Ram Hari", date: "May 3, 2024" }
            ]
                .map((blog, i) => (
                    <BlogCard key={i} imgSrc={blog.img} title={blog.title} author={blog.author} date={blog.date} profileImg={blogimg3} />
                ))}
        </div>
    </>
);

export default Blog;
