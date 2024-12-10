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
    </>
);

export default Blog;
