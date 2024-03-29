import './scrollIndicator.scss'

function ScrollIndicator() {
  
  return(
    <a className="scroll-indicator" href='#About'>
      <h2 className='scroll-indicator-text'>More About Me</h2>
      <div className="scroll-indicator-arrow">
        <svg
          
          xmlns="http://www.w3.org/2000/svg"
          viewBox={"0 0 25 25"}
          width={'48'}
          height={'48'}

        >
          <path d="M7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L15.0711 11.3431C15.4616 10.9526 15.4616 10.3195 15.0711 9.92893C14.6805 9.53841 14.0474 9.53841 13.6569 9.92893L8 15.5858L2.34315 9.92893C1.95262 9.53841 1.31946 9.53841 0.928933 9.92893C0.538408 10.3195 0.538408 10.9526 0.928933 11.3431L7.29289 17.7071ZM7 0L7 17H9L9 0L7 0Z"/>

        </svg>
      </div>
      
    </a>
  )
}

export default ScrollIndicator;