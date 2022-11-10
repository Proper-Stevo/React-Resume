import React from 'react';
import '../styling/Footer.css'

export default function Footer() {
    return (
        <div className='footer d-flex justify-content-center py-4'>
            <a
                href='https://github.com/Proper-Stevo'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-github custom-icon fa-2xl'></i>
            </a>
            <a
                href='https://linkedin.com/in/stevenb1992/'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-linkedin custom-icon fa-2xl'></i>
            </a>
            <a
                href='https://stackoverflow.com/users/20445879/stevob?tab=profile'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-stack-overflow custom-icon fa-2xl'></i>
            </a>
            <a
                href='mailto:steven.barrios92@gmail.com'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-goole custom-icon'></i>
            </a>
        </div>
    );
};