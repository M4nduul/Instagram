import './story.scss';

const StoryList = () => {
    
    return(
        
        <div className='container row'>

            <div className= 'card box-card'>
            <div class='card-content account-content'>
                <div class='story-container'>
                    <img class='circle stories' src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'/>
                    <p>anna_simp</p>
                </div>
            </div>

            </div>
        </div>
    )

}


const Story = () => {
    
    return (
        <div>
            
            <StoryList/>
        </div>
    )    
}

export default Story;