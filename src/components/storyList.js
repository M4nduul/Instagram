import './storyList.scss'

const ShowAvatar = ({avatarUrl, name, setIsStory }) => {
    
    return (
        <div class='story-container'>
            <div class='story-border'onClick={ () => setIsStory(true)}>
                <img class='circle stories' src={ avatarUrl }/>
            </div>
            <p>{ name }</p>
        </div>
    )
}


const StoryList = ({ setIsStory }) => {
    
    const stories = [
        {
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name: 'anna',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'

        },

        {
            avatar: 'https://images.unsplash.com/photo-1546249041-2316761d7c1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
            name: 'complex',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },

        {
            avatar: 'https://images.unsplash.com/photo-1615170267899-a9f1013491f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            name: 'pubity',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },

        {
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name: 'anna',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },

        {
            avatar: 'https://images.unsplash.com/photo-1546249041-2316761d7c1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
            name: 'complex',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },

        {
            avatar: 'https://images.unsplash.com/photo-1615170267899-a9f1013491f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            name: 'pubity',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },
        
        {
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name: 'anna',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },

        {
            avatar: 'https://images.unsplash.com/photo-1546249041-2316761d7c1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
            name: 'complex',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },

        {
            avatar: 'https://images.unsplash.com/photo-1615170267899-a9f1013491f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            name: 'pubity',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },
        
        {
            avatar: 'https://images.unsplash.com/photo-1546249041-2316761d7c1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
            name: 'complex',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },

        {
            avatar: 'https://images.unsplash.com/photo-1615170267899-a9f1013491f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            name: 'pubity',
            story: 'https://images.unsplash.com/photo-1620678685982-c76225cfd48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },
    ]
    return (
        <div className='container row'>
            <div className= 'card box-card'>
                <div class='card-content account-content'>
                    {
                        stories.map((item) => {
                            return (
                                <ShowAvatar 
                                avatarUrl= { item.avatar }
                                name= { item.name }
                                setIsStory= { setIsStory }/>
                                )
                        })
                    }
                </div>
            </div>
        </div>
        
    )

}

export default StoryList;