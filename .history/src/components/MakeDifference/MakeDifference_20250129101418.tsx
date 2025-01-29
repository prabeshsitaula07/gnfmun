import child1 from '../../assets/child1.jpg';
import tree from '../../assets/tree.jpg';
import volunteer from '../../assets/volunteer.jpg';



export default function MakeDifference() {

    return (
        <div className="h-screen min-h-fit px-12 py-12">
            <h1>How to make a difference</h1>
            <div className="flex justify-between w-full">
                <div>
                    <img src={child1} alt="" />
                    <div>
                        <span>Sponsor a child</span>
                        <p>
                        We provide monetary assistance 
to children living in poverty all 
over the world. 
                        </p>
                    </div>
                </div>
                <div>
                    <img src={tree} alt="" />
                    <div>
                        <span>Tree-Plantation Drives</span>
                        <p> Join us in restoring greenery and reducing carbon footprints.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={volunteer} alt="" />
                    <div>
                        <span> Volunteering and Public Service</span>
                        <p>Help us create cleaner, healthier spaces for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
