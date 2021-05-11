import React, { useEffect, useRef, useState } from 'react'
import M from 'materialize-css'
import './post.scss';

const Modal = () => {
    const modalRef = useRef();

    useEffect(() => {
        var elems = modalRef.current;
        var instances = M.Modal.init(elems, {});
    }, [])
    
    return (
        <div id="modal1" class="modal" ref={ modalRef }>
            <p class="modal-close special">Report</p>
            <p class="modal-close special">Unfollow</p>
            <p class="modal-close ">Go to post</p>
            <p class="modal-close ">Share to...</p>
            <p class="modal-close ">Copy Link</p>
            <p class="modal-close ">Embed</p>
            <p class="modal-close ">Cancel</p>
      </div>
    )
}

const PostCard = (props) => {
    const { avatarUrl, posterUser, imgUrl, description, createdAt } =props;

    
    
    return (
        <div className='container'>
            <div class="card">
                <div class='valign-wrapper card-content account-content'>
                    <img class='circle account-img' src={ avatarUrl }/>
                    <span className='account-name'>{ posterUser }</span>
                    <svg class='more modal-trigger' href='#modal1' height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                </div>
                <div class="card-image">
                    <img src={ imgUrl }/>
                </div>
                <div class="card-content">
                    <section>
                        <svg class="like-btn" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>                        
                        <svg class="comment" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                        <svg class="share" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        <svg class="save" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                    </section>
                    <p>Liked by <span>{'chupapi'}</span> and <span>others</span> </p>

                    <section class='comment-section'>
                        <span className='account-name'>{ posterUser }</span>
                        <span> { description }</span>
                        <p className='date'>{ createdAt }</p>
                    </section>
                    
                </div>
            </div>
            <Modal />
        </div>
    )

}




const Post = () => {

    const postArray = [
        {
            avatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fskyline-clipart-smart-city-15.png&f=1&nofb=1',
            posterUser: 'bigcity',
            imgUrl: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.creativeswall.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fcity-in-the-valley-hd-wallpaper-87454.jpeg&f=1&nofb=1'] ,
            description: 'in the middle of a lush green belt zone of fontenay-aux-roses in france, boman has designed a house for #archers. built from perforated brick-bearing terracotta, the modest intervention features an oversized circular window on the main façade, which takes its cue from the archery targets found opposite. photos by @antoine_seguin_more on #designboom #architecture', 
            createdAt: new Date().toLocaleString(),
        },
        
        {
            avatarUrl: 'https://images.unsplash.com/photo-1620440663626-cba4be0817dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            posterUser: 'carlover',
            imgUrl: ['https://images.unsplash.com/photo-1620589775440-aeea9fb641c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'] ,
            description: 'Driving a TDF it’s a great experience, I love this car L’ARTDF',
            createdAt: new Date().toLocaleString(),
        }
    ];   

    return (
        <div>
            {
                postArray.map(item => {
                    return (
                        <PostCard 
                            avatarUrl={ item.avatarUrl } 
                            posterUser={ item.posterUser }
                            imgUrl={ item.imgUrl }
                            description={ item.description }
                            createdAt={ item.createdAt }
                            />
                    )
                })
            }
        </div>
    )

}

export default Post;