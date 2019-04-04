import React from 'react';
import IGLogo from '''



const SearchBar = () => {
    return (
        <div className='logos'>
            <img src={logo} alt='IG Logo' width='700px' />
            <img src={textLogo} alt='IG' />
        </div>
        <div>
            <input type='text'
            placeholder='search' />
        </div>
        <div className='icons'>
            <img src={compass} alt='compass' />
            <img src={heart} alt='heart' />
            <img src={profile} alt='profile' />
        </div>
    )
}

export default SearchBar;