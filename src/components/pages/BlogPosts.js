import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../hooks/useData';
import './BlogPost.css';

export default function BlogPosts() {
  const { error, loading, data } = useData();
  const { specificSlug } = useParams();

  if (loading) return <h2 className='message'>Waiting...</h2>;
  if (error) return <h2 className='message'>Something went wrong :/</h2>;

  const specificPost = data.posts.find(post => post.slug === specificSlug);
  if (!specificPost) return <h2 className='message'>Page not Found</h2>

  return (
    <div className='page-container'>
      <div className='post-container'>
        <div className='post-top'>
          <span className='author'>{specificPost.author.name}</span>
          <span className='date'>{specificPost.datePublished}</span>
        </div>
        <div className='text'>
          <h2 className='title'>{specificPost.title}</h2>
          <img className='coverPhoto' src={specificPost.coverPhoto.url} />
          <div className='post-content' dangerouslySetInnerHTML={{ __html: specificPost.content.html }}></div>
          {specificPost.ingredientsHowToMakeIt && (
            <>
              <div className='headings'>How to Make it</div>
              <div className='instructions' dangerouslySetInnerHTML={{ __html: specificPost.ingredientsHowToMakeIt.html }}></div>
            </>
          )}
          <div className='headings'>Rating:</div>
          <span className='rating'>{specificPost.rating}</span>
          {specificPost.location && (
            <>
              <div className='headings'>Location: </div>
              <span className='coords'>{specificPost.location.latitude} {specificPost.location.longitude}</span>
            </>
          )}
          {specificPost.foodImage && (
            <img src={specificPost.foodImage.url} className='otherImage' />
          )}
          {specificPost.additionalImage && (
            <img src={specificPost.additionalImage.url} className='otherImage' />
          )}
        </div>
      </div>
      <div className='footer'>©WhenInRome</div>
    </div>
  )
}
