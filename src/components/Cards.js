import React, { useState } from 'react';
import "./Cards.css";
import { useData } from './hooks/useData';
import { Link } from 'react-router-dom';

export default function Cards() {
    const { error, loading, data } = useData();
    const [Category, setCategory] = useState('All');

    if (loading) return <div>Waiting...</div>;
    if (error) return <div>Something went wrong</div>;

    const filterposts = Category === 'All' ? data.posts : data.posts.filter(post => post.category === Category);
    return (
        <>
            {/* Create filter container to filter the posts based on category */}
            <div className='filter-container'>
                <span className={Category === 'All' ? 'filter-active' : 'filter'}
                    onClick={() => setCategory('All')}>All</span>
                <span className={Category === 'Cook_It' ? 'filter-active' : 'filter'}
                    onClick={() => setCategory('Cook_It')}>Cook It</span>
                <span className={Category === 'Book_It' ? 'filter-active' : 'filter'}
                    onClick={() => setCategory('Book_It')}>Book It</span>
                <span className={Category === 'When_not_in_Rome' ? 'filter-active' : 'filter'}
                    onClick={() => setCategory('When_not_in_Rome')}>When not in Rome</span>
            </div>
            <div className='Cards'>
                {filterposts.map(post => {
                    return <div className='one-card'>
                        <Link to={`/posts/${post.slug}`} className='links'>
                            <img src={post.coverPhoto.url} className='card-image' alt=" " />
                            <h2 className='card-title'>{post.title}</h2>
                        </Link>
                        <div className='card-content'>
                            <span className='card-author'>{post.author.name}</span>
                            <span className='card-date'>{post.datePublished}</span>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
