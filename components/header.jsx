import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
        <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto'>
            <div className=''>
                <h1 className='text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
                <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
                <h3 className='text-surface-600 pt-2 text-sm font-normal tracking-wider'>{props.data.subheadline}</h3>
                <h3 className='text-surface-600 pt-2 text-sm font-normal tracking-wider'>{props.data.subsubheadline}</h3>
            </div>
            <Navigation></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header