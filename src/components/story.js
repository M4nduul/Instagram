import { useEffect, useState } from 'react';
import './story.scss';


const Story = ({ images = [
    'https://images.unsplash.com/photo-1544706265-7183fdaf1bcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
    'https://images.unsplash.com/photo-1587352925944-c08ff08cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80',
    'https://images.unsplash.com/photo-1511843395354-8f364cfb80d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80'
    ] }) => {
        
    const [sid, setSid] = useState(0)
    const [percent, setPercent] = useState(0)
    const [pause, setPause] = useState(false)

    const getPercent = (index) => {
        if (index < sid) return 100
        if (index == sid) {
            if (percent == 100) {
                setSid(sid + 1)
                setPercent(0)
            }

            return percent
        } 


    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) return (
                setPercent(percent => {
                    
                    if (percent == 100) {
                        setPause(true)
                    }
                    return percent + 1
                })
            )
        }, 30)

        return () => clearInterval(interval)
        
    }, [pause])
    

    return (
        <div class='black-container flex-center'>
            <div className='story-body' style={{ backgroundImage: `url(${images[sid]})`}}>
                <div className='progress-container'>
                    {
                        images.map((item, index) => {
                            return (
                                <div className='progress' style={{ width: `${ 100 / images.length - 1 }%` }}>
                                    <div className='progress-bar' style={{ width: `${getPercent(index)}%` }}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <ul class="collection">
                    <li class="collection-item avatar valign-wrapper">
                        <img class='circle stories' src='https://images.unsplash.com/photo-1620576504147-118a150bbca2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'/>
                        <span class="title white-text font-bold">instagram story hiileshd</span>
                        <a href="#!" class="secondary-content">
                            <svg aria-label="Pause" class="_8-yf5 " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16"><path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"></path></svg>
                            <svg aria-label="Audio is playing" class="_8-yf5 " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16"><path clip-rule="evenodd" d="M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z" fill-rule="evenodd"></path></svg>
                            <i className='material-icons white-text'>more_horiz</i>
                        </a>
                    </li>
                </ul>
            </div>
            <img className='insta-logo' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png'/>
            <svg className="close-logo " fill="#ffffff" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
        </div>
    )    
}

export default Story;